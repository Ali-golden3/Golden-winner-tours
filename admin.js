/* =========================================
   GOLDEN WINNER TOURS — ADMIN PANEL LOGIC
========================================= */

/* =========================================
   CLOUDINARY CONFIG
========================================= */
const CLOUDINARY_CLOUD_NAME = "v356hm8y";
const CLOUDINARY_UPLOAD_PRESET = "umighaxz";

/* =========================================
   TABS
========================================= */
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const target = btn.getAttribute("data-tab");

        tabButtons.forEach(function (b) { b.classList.remove("active"); });
        tabContents.forEach(function (c) { c.classList.remove("active"); });

        btn.classList.add("active");
        document.getElementById(target).classList.add("active");

        if (target === "tab-settings") loadSettingsForm();
        if (target === "tab-messages") loadMessages();
        if (target === "tab-hajj-details") loadHdList();
    });
});

/* =========================================
   AUTH
========================================= */
const loginScreen = document.getElementById("loginScreen");
const dashboard = document.getElementById("dashboard");

auth.onAuthStateChanged(function (user) {
    if (user) {
        loginScreen.style.display = "none";
        dashboard.style.display = "block";
        loadProgramsList();
        loadUnreadCount();
    } else {
        loginScreen.style.display = "flex";
        dashboard.style.display = "none";
    }
});

document.getElementById("loginBtn").addEventListener("click", function () {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const errorBox = document.getElementById("loginError");
    errorBox.textContent = "";

    if (!email || !password) {
        errorBox.textContent = "من فضلك أدخل البريد وكلمة المرور.";
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .catch(function () {
            errorBox.textContent = "بيانات الدخول غير صحيحة.";
        });
});

document.getElementById("logoutBtn").addEventListener("click", function () {
    auth.signOut();
});

/* =========================================
   GENERIC CLOUDINARY UPLOAD HELPER
   بتستخدم لأي صورة (لوجو / سلايدر / عننا / برنامج)
========================================= */
function setupUploadBox(boxId, inputId, previewId, statusId, onDone) {

    const box = document.getElementById(boxId);
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    const status = document.getElementById(statusId);

    box.addEventListener("click", function () {
        input.click();
    });

    input.addEventListener("change", function () {

        const file = input.files[0];
        if (!file) return;

        status.style.display = "block";
        status.textContent = "بترفع الصورة...";

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        fetch("https://api.cloudinary.com/v1_1/" + CLOUDINARY_CLOUD_NAME + "/image/upload", {
            method: "POST",
            body: formData
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
                if (data.secure_url) {
                    preview.src = data.secure_url;
                    preview.style.display = "block";
                    status.textContent = "تم رفع الصورة ✓";
                    setTimeout(function () { status.style.display = "none"; }, 1500);
                    onDone(data.secure_url);
                } else {
                    status.textContent = "فشل رفع الصورة.";
                }
            })
            .catch(function () {
                status.textContent = "فشل رفع الصورة، تأكد من اتصالك بالإنترنت.";
            });
    });
}

function showExistingPreview(previewId, url) {
    if (!url) return;
    const preview = document.getElementById(previewId);
    preview.src = url;
    preview.style.display = "block";
}

/* =========================================
   TOAST
========================================= */
function showToast(message, isError) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMsg");
    toastMsg.textContent = message;
    toast.className = "toast show" + (isError ? " error" : "");
    setTimeout(function () {
        toast.className = "toast" + (isError ? " error" : "");
    }, 2600);
}

/* =========================================================
   ============  TAB 1: PROGRAMS (حج / عمرة)  ================
========================================================= */

let editingDocId = null;
let uploadedImageUrl = "";

const fCategory = document.getElementById("fCategory");
const fDurationField = document.getElementById("fDurationField");
const fPriceRow = document.getElementById("fPriceRow");
const fIconField = document.getElementById("fIconField");
const fImageField = document.getElementById("fImageField");

function toggleCategoryFields() {
    const isHajj = fCategory.value === "hajj";
    fIconField.style.display = isHajj ? "block" : "none";
    document.getElementById("fTierField").style.display = isHajj ? "block" : "none";
    fImageField.style.display = isHajj ? "none" : "block";
    fDurationField.style.display = isHajj ? "none" : "block";
    fPriceRow.style.display = isHajj ? "none" : "grid";
}
fCategory.addEventListener("change", toggleCategoryFields);
toggleCategoryFields();

setupUploadBox("uploadBox", "fImageInput", "uploadPreview", "uploadStatus", function (url) {
    uploadedImageUrl = url;
});

const formError = document.getElementById("formError");
const formTitle = document.getElementById("formTitle");
const cancelEditBtn = document.getElementById("cancelEditBtn");

document.getElementById("saveBtn").addEventListener("click", function () {

    formError.textContent = "";

    const category = fCategory.value;
    const title = document.getElementById("fTitle").value.trim();
    const description = document.getElementById("fDescription").value.trim();
    const badge = document.getElementById("fBadge").value.trim();
    const featured = document.getElementById("fFeatured").checked;

    if (!title || !description) {
        formError.textContent = "من فضلك أدخل اسم البرنامج والوصف على الأقل.";
        return;
    }

    const data = {
        category: category,
        title: title,
        description: description,
        badge: badge,
        featured: featured,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    if (category === "hajj") {
        data.icon = document.getElementById("fIcon").value.trim() || "kaaba";
    data.tier = document.getElementById("fTier").value;}
     else {
        data.duration = document.getElementById("fDuration").value.trim();
        data.price = document.getElementById("fPrice").value.trim();
        data.currency = document.getElementById("fCurrency").value.trim() || "جنيه";
        if (uploadedImageUrl) {
            data.image = uploadedImageUrl;
        }
    }

    const collectionRef = db.collection("programs");

    const savePromise = editingDocId
        ? collectionRef.doc(editingDocId).update(data)
        : collectionRef.add(data);

    savePromise
        .then(function () {
            showToast(editingDocId ? "تم تحديث البرنامج بنجاح" : "تم إضافة البرنامج بنجاح");
            resetForm();
            loadProgramsList();
        })
        .catch(function () {
            formError.textContent = "حصل خطأ أثناء الحفظ، حاول تاني.";
        });
});

cancelEditBtn.addEventListener("click", resetForm);

function resetForm() {
    editingDocId = null;
    uploadedImageUrl = "";
    document.getElementById("fTitle").value = "";
    document.getElementById("fDescription").value = "";
    document.getElementById("fBadge").value = "";
    document.getElementById("fDuration").value = "";
    document.getElementById("fPrice").value = "";
    document.getElementById("fCurrency").value = "جنيه";
    document.getElementById("fIcon").value = "";
    document.getElementById("fTier").value = "premium";
    document.getElementById("fFeatured").checked = false;
    fCategory.value = "umrah";
    toggleCategoryFields();
    document.getElementById("uploadPreview").style.display = "none";
    document.getElementById("uploadPreview").src = "";
    formTitle.textContent = "إضافة برنامج جديد";
    cancelEditBtn.style.display = "none";
    formError.textContent = "";
}

function loadProgramsList() {
    const listBox = document.getElementById("programsList");

    db.collection("programs").get().then(function (snapshot) {

        if (snapshot.empty) {
            listBox.innerHTML =
                '<div class="empty-state">' +
                    '<i class="fa-solid fa-inbox"></i>' +
                    'لسه معملتش أي برنامج، ضيف أول برنامج من النموذج جنبك.' +
                '</div>';
            return;
        }

        listBox.innerHTML = "";

        snapshot.forEach(function (doc) {
            const p = doc.data();
            const isHajj = p.category === "hajj";

            const thumbHTML = isHajj
                ? '<i class="fa-solid fa-' + (p.icon || "kaaba") + '"></i>'
                : (p.image ? '<img src="' + p.image + '">' : '<i class="fa-solid fa-image"></i>');

            const subText = isHajj
                ? (p.badge || "برنامج حج")
                : ((p.price ? p.price + " " + (p.currency || "جنيه") : "") + (p.duration ? " · " + p.duration : ""));

            const item = document.createElement("div");
            item.className = "program-item";
            item.innerHTML =
                '<div class="thumb">' + thumbHTML + '</div>' +
                '<div class="info">' +
                    '<strong>' + p.title + '</strong>' +
                    '<span>' + subText + '</span>' +
                '</div>' +
                '<span class="cat-badge">' + (isHajj ? "حج" : "عمرة") + '</span>' +
                '<div class="actions">' +
                    '<button class="icon-btn edit-btn"><i class="fa-solid fa-pen"></i></button>' +
                    '<button class="icon-btn del del-btn"><i class="fa-solid fa-trash"></i></button>' +
                '</div>';

            item.querySelector(".edit-btn").addEventListener("click", function () {
                startEdit(doc.id, p);
            });

            item.querySelector(".del-btn").addEventListener("click", function () {
                deleteProgram(doc.id);
            });

            listBox.appendChild(item);
        });

    }).catch(function () {
        listBox.innerHTML =
            '<div class="empty-state"><i class="fa-solid fa-triangle-exclamation"></i>حصل خطأ في تحميل البرامج.</div>';
    });
}

function startEdit(id, p) {
    editingDocId = id;
    fCategory.value = p.category || "umrah";
    toggleCategoryFields();

    document.getElementById("fTitle").value = p.title || "";
    document.getElementById("fDescription").value = p.description || "";
    document.getElementById("fBadge").value = p.badge || "";
    document.getElementById("fFeatured").checked = !!p.featured;

    if (p.category === "hajj") {
        document.getElementById("fIcon").value = p.icon || "";
        document.getElementById("fTier").value = p.tier || "premium";
    } else {
        document.getElementById("fDuration").value = p.duration || "";
        document.getElementById("fPrice").value = p.price || "";
        document.getElementById("fCurrency").value = p.currency || "جنيه";
        if (p.image) {
            uploadedImageUrl = p.image;
            const preview = document.getElementById("uploadPreview");
            preview.src = p.image;
            preview.style.display = "block";
        }
    }

    formTitle.textContent = "تعديل البرنامج";
    cancelEditBtn.style.display = "inline-flex";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteProgram(id) {
    if (!confirm("متأكد إنك عايز تمسح البرنامج ده؟")) return;

    db.collection("programs").doc(id).delete()
        .then(function () {
            showToast("تم حذف البرنامج");
            loadProgramsList();
        })
        .catch(function () {
            showToast("حصل خطأ أثناء الحذف", true);
        });
}

/* =========================================================
   ============  TAB NEW: HAJJ TIER DETAILS  ==================
   مجموعة Firestore منفصلة تمامًا: "hajjPrograms"
   كل مستند فيه tier (premium / popular / luxury) بيربطه
   بواحد من الكروت التلاتة في الصفحة الرئيسية
========================================================= */

let hdEditingId = null;
let hdUploadedImageUrl = "";

const HD_TIER_LABELS = {
    premium: "الحج الاقتصادي",
    popular: "الحج المميز ابراج كدانة",
    luxury: "الحج الفاخر"
};

setupUploadBox("hdUploadBox", "hdImageInput", "hdUploadPreview", "hdUploadStatus", function (url) {
    hdUploadedImageUrl = url;
});

const hdFormError = document.getElementById("hdFormError");
const hdFormTitle = document.getElementById("hdFormTitle");
const hdCancelEditBtn = document.getElementById("hdCancelEditBtn");

document.getElementById("hdSaveBtn").addEventListener("click", function () {

    hdFormError.textContent = "";

    const tier = document.getElementById("hdTier").value;
    const title = document.getElementById("hdTitle").value.trim();
    const description = document.getElementById("hdDescription").value.trim();

    if (!title || !description) {
        hdFormError.textContent = "من فضلك أدخل اسم البرنامج والوصف على الأقل.";
        return;
    }

    const data = {
        tier: tier,
        title: title,
        description: description,
        duration: document.getElementById("hdDuration").value.trim(),
        price: document.getElementById("hdPrice").value.trim(),
        currency: document.getElementById("hdCurrency").value.trim() || "جنيه",
        badge: document.getElementById("hdBadge").value.trim(),
        order: Number(document.getElementById("hdOrder").value) || 0,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    if (hdUploadedImageUrl) {
        data.image = hdUploadedImageUrl;
    }

    const collectionRef = db.collection("hajjPrograms");

    const savePromise = hdEditingId
        ? collectionRef.doc(hdEditingId).update(data)
        : collectionRef.add(data);

    savePromise
        .then(function () {
            showToast(hdEditingId ? "تم تحديث البرنامج بنجاح" : "تم إضافة البرنامج بنجاح");
            hdResetForm();
            loadHdList();
        })
        .catch(function () {
            hdFormError.textContent = "حصل خطأ أثناء الحفظ، حاول تاني.";
        });
});

hdCancelEditBtn.addEventListener("click", hdResetForm);

function hdResetForm() {
    hdEditingId = null;
    hdUploadedImageUrl = "";
    document.getElementById("hdTier").value = "premium";
    document.getElementById("hdTitle").value = "";
    document.getElementById("hdDescription").value = "";
    document.getElementById("hdDuration").value = "";
    document.getElementById("hdPrice").value = "";
    document.getElementById("hdCurrency").value = "جنيه";
    document.getElementById("hdBadge").value = "";
    document.getElementById("hdOrder").value = "";
    document.getElementById("hdUploadPreview").style.display = "none";
    document.getElementById("hdUploadPreview").src = "";
    hdFormTitle.textContent = "إضافة برنامج فرعي جديد";
    hdCancelEditBtn.style.display = "none";
    hdFormError.textContent = "";
}

function loadHdList() {
    const listBox = document.getElementById("hdList");
    const filterTier = document.getElementById("hdFilterTier").value;

    listBox.innerHTML =
        '<div class="empty-state"><i class="fa-solid fa-spinner fa-spin"></i>جاري تحميل البرامج...</div>';

    db.collection("hajjPrograms").get().then(function (snapshot) {

        let items = [];
        snapshot.forEach(function (doc) {
            const data = doc.data();
            data._id = doc.id;
            items.push(data);
        });

        if (filterTier !== "all") {
            items = items.filter(function (p) { return p.tier === filterTier; });
        }

        if (!items.length) {
            listBox.innerHTML =
                '<div class="empty-state">' +
                    '<i class="fa-solid fa-inbox"></i>' +
                    'لا توجد برامج فرعية مضافة لسه.' +
                '</div>';
            return;
        }

        items.sort(function (a, b) { return (Number(a.order) || 0) - (Number(b.order) || 0); });

        listBox.innerHTML = "";

        items.forEach(function (p) {

            const thumbHTML = p.image
                ? '<img src="' + p.image + '">'
                : '<i class="fa-solid fa-kaaba"></i>';

            const subText = (HD_TIER_LABELS[p.tier] || p.tier) +
                (p.price ? " · " + p.price + " " + (p.currency || "جنيه") : "");

            const item = document.createElement("div");
            item.className = "program-item";
            item.innerHTML =
                '<div class="thumb">' + thumbHTML + '</div>' +
                '<div class="info">' +
                    '<strong>' + p.title + '</strong>' +
                    '<span>' + subText + '</span>' +
                '</div>' +
                '<span class="cat-badge">' + (HD_TIER_LABELS[p.tier] || p.tier) + '</span>' +
                '<div class="actions">' +
                    '<button class="icon-btn edit-btn"><i class="fa-solid fa-pen"></i></button>' +
                    '<button class="icon-btn del del-btn"><i class="fa-solid fa-trash"></i></button>' +
                '</div>';

            item.querySelector(".edit-btn").addEventListener("click", function () {
                hdStartEdit(p._id, p);
            });

            item.querySelector(".del-btn").addEventListener("click", function () {
                hdDeleteProgram(p._id);
            });

            listBox.appendChild(item);
        });

    }).catch(function () {
        listBox.innerHTML =
            '<div class="empty-state"><i class="fa-solid fa-triangle-exclamation"></i>حصل خطأ في تحميل البرامج.</div>';
    });
}

document.getElementById("hdFilterTier").addEventListener("change", loadHdList);

function hdStartEdit(id, p) {
    hdEditingId = id;

    document.getElementById("hdTier").value = p.tier || "premium";
    document.getElementById("hdTitle").value = p.title || "";
    document.getElementById("hdDescription").value = p.description || "";
    document.getElementById("hdDuration").value = p.duration || "";
    document.getElementById("hdPrice").value = p.price || "";
    document.getElementById("hdCurrency").value = p.currency || "جنيه";
    document.getElementById("hdBadge").value = p.badge || "";
    document.getElementById("hdOrder").value = (p.order !== undefined && p.order !== null) ? p.order : "";

    if (p.image) {
        hdUploadedImageUrl = p.image;
        const preview = document.getElementById("hdUploadPreview");
        preview.src = p.image;
        preview.style.display = "block";
    }

    hdFormTitle.textContent = "تعديل البرنامج الفرعي";
    hdCancelEditBtn.style.display = "inline-flex";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function hdDeleteProgram(id) {
    if (!confirm("متأكد إنك عايز تمسح البرنامج الفرعي ده؟")) return;

    db.collection("hajjPrograms").doc(id).delete()
        .then(function () {
            showToast("تم حذف البرنامج");
            loadHdList();
        })
        .catch(function () {
            showToast("حصل خطأ أثناء الحذف", true);
        });
}

/* =========================================================
   ============  TAB 2: SITE SETTINGS  ========================
========================================================= */

let uploadedLogoUrl = "";
let uploadedHero1Url = "";
let uploadedHero2Url = "";
let uploadedHero3Url = "";
let uploadedAboutUrl = "";

setupUploadBox("logoBox", "logoInput", "logoPreview", "logoStatus", function (url) {
    uploadedLogoUrl = url;
});
setupUploadBox("hero1Box", "hero1Input", "hero1Preview", "hero1Status", function (url) {
    uploadedHero1Url = url;
});
setupUploadBox("hero2Box", "hero2Input", "hero2Preview", "hero2Status", function (url) {
    uploadedHero2Url = url;
});
setupUploadBox("hero3Box", "hero3Input", "hero3Preview", "hero3Status", function (url) {
    uploadedHero3Url = url;
});
setupUploadBox("aboutBox", "aboutInput", "aboutPreview", "aboutStatus", function (url) {
    uploadedAboutUrl = url;
});

let settingsLoadedOnce = false;

function loadSettingsForm() {

    db.collection("settings").doc("site").get().then(function (doc) {

        if (!doc.exists) return;
        const s = doc.data();

        if (s.phone) document.getElementById("fPhone").value = s.phone;
        if (s.whatsapp) document.getElementById("fWhatsapp").value = s.whatsapp;
        if (s.address) document.getElementById("fAddress").value = s.address;
        if (s.instagram) document.getElementById("fInstagram").value = s.instagram;
        if (s.facebook) document.getElementById("fFacebook").value = s.facebook;
        if (s.tiktok) document.getElementById("fTiktok").value = s.tiktok;

        if (!settingsLoadedOnce) {
            showExistingPreview("logoPreview", s.logo);
            showExistingPreview("hero1Preview", s.heroImage1);
            showExistingPreview("hero2Preview", s.heroImage2);
            showExistingPreview("hero3Preview", s.heroImage3);
            showExistingPreview("aboutPreview", s.aboutImage);
            settingsLoadedOnce = true;
        }

    }).catch(function () {
        showToast("حصل خطأ في تحميل إعدادات الموقع", true);
    });
}

document.getElementById("saveSettingsBtn").addEventListener("click", function () {

    const data = {};

    if (uploadedLogoUrl) data.logo = uploadedLogoUrl;
    if (uploadedHero1Url) data.heroImage1 = uploadedHero1Url;
    if (uploadedHero2Url) data.heroImage2 = uploadedHero2Url;
    if (uploadedHero3Url) data.heroImage3 = uploadedHero3Url;
    if (uploadedAboutUrl) data.aboutImage = uploadedAboutUrl;

    const phone = document.getElementById("fPhone").value.trim();
    const whatsapp = document.getElementById("fWhatsapp").value.trim();
    const address = document.getElementById("fAddress").value.trim();
    const instagram = document.getElementById("fInstagram").value.trim();
    const facebook = document.getElementById("fFacebook").value.trim();
    const tiktok = document.getElementById("fTiktok").value.trim();

    if (phone) data.phone = phone;
    if (whatsapp) data.whatsapp = whatsapp;
    if (address) data.address = address;
    if (instagram) data.instagram = instagram;
    if (facebook) data.facebook = facebook;
    if (tiktok) data.tiktok = tiktok;

    db.collection("settings").doc("site").set(data, { merge: true })
        .then(function () {
            showToast("تم حفظ إعدادات الموقع بنجاح");
            uploadedLogoUrl = "";
            uploadedHero1Url = "";
            uploadedHero2Url = "";
            uploadedHero3Url = "";
            uploadedAboutUrl = "";
        })
        .catch(function () {
            showToast("حصل خطأ أثناء حفظ الإعدادات", true);
        });
});

/* =========================================================
   ============  TAB 3: CONTACT MESSAGES  =====================
========================================================= */

function loadUnreadCount() {
    db.collection("messages").where("read", "==", false).get().then(function (snapshot) {
        const badge = document.getElementById("unreadBadge");
        if (snapshot.size > 0) {
            badge.textContent = snapshot.size;
            badge.style.display = "inline-block";
        } else {
            badge.style.display = "none";
        }
    }).catch(function () { /* ignore */ });
}

function loadMessages() {

    const listBox = document.getElementById("messagesList");
    listBox.innerHTML =
        '<div class="empty-state"><i class="fa-solid fa-spinner fa-spin"></i>جاري تحميل الرسائل...</div>';

    db.collection("messages").orderBy("createdAt", "desc").get().then(function (snapshot) {

        if (snapshot.empty) {
            listBox.innerHTML =
                '<div class="empty-state">' +
                    '<i class="fa-solid fa-envelope-open"></i>' +
                    'لسه معكش أي رسائل من زوار الموقع.' +
                '</div>';
            return;
        }

        listBox.innerHTML = "";

        snapshot.forEach(function (doc) {
            const m = doc.data();

            const dateText = m.createdAt && m.createdAt.toDate
                ? m.createdAt.toDate().toLocaleString("ar-EG")
                : "";

            const item = document.createElement("div");
            item.className = "message-item" + (m.read ? "" : " unread");

            item.innerHTML =
                '<div class="msg-top">' +
                    '<strong>' + (m.name || "بدون اسم") + '</strong>' +
                    '<span class="msg-meta">' + dateText + '</span>' +
                '</div>' +
                (m.program ? '<span class="msg-program">' + m.program + '</span>' : '') +
                '<p>' + (m.message || "") + '</p>' +
                '<div class="msg-actions">' +
                    '<a class="msg-call" href="tel:' + (m.phone || "") + '"><i class="fa-solid fa-phone"></i>' + (m.phone || "") + '</a>' +
                    (m.read ? '' : '<button class="msg-read"><i class="fa-solid fa-check"></i>اتقرأت</button>') +
                    '<button class="msg-del"><i class="fa-solid fa-trash"></i>حذف</button>' +
                '</div>';

            const readBtn = item.querySelector(".msg-read");
            if (readBtn) {
                readBtn.addEventListener("click", function () {
                    db.collection("messages").doc(doc.id).update({ read: true })
                        .then(function () {
                            loadMessages();
                            loadUnreadCount();
                        });
                });
            }

            item.querySelector(".msg-del").addEventListener("click", function () {
                if (!confirm("متأكد إنك عايز تمسح الرسالة دي؟")) return;
                db.collection("messages").doc(doc.id).delete()
                    .then(function () {
                        loadMessages();
                        loadUnreadCount();
                    });
            });

            listBox.appendChild(item);
        });

    }).catch(function () {
        listBox.innerHTML =
            '<div class="empty-state"><i class="fa-solid fa-triangle-exclamation"></i>حصل خطأ في تحميل الرسائل.</div>';
    });
}
