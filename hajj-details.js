/* =========================================
   صفحة تفاصيل برنامج الحج — جلب وعرض البيانات
   بيقرأ ?tier= من الرابط (premium / popular / luxury)
   وبيجيب البرامج المطابقة من مجموعة "hajjPrograms"
   اللي بتتحكم فيها من admin.html (تبويب "تفاصيل الحج")
========================================= */

/* التصنيفات التلاتة الثابتة (لازم تتطابق مع اللي في admin.js) */
const HD_TIERS = {
    premium: { label: "الحج الاقتصادي",       icon: "gem",  desc: "برنامج حج مميز بخدمات متكاملة واهتمام بكل تفاصيل الرحلة." },
    popular: { label: "الحج المميز ابراج كدانة", icon: "star", desc: "الأكثر طلبًا بين ضيوف الرحمن، بإقامة وخدمات مميزة وتنظيم كامل للرحلة." },
    luxury:  { label: "الحج الفاخر",        icon: "kaaba", desc: "تجربة فاخرة بخدمات VIP متكاملة من أول لحظة حتى العودة." }
};

function hdGetTierFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const tier = params.get("tier");
    return HD_TIERS[tier] ? tier : "premium";
}

function hdEscape(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
}

function hdApplyHead(tierKey) {
    const tier = HD_TIERS[tierKey];
    document.getElementById("tierIcon").innerHTML = '<i class="fa-solid fa-' + tier.icon + '"></i>';
    document.getElementById("tierLabel").textContent = "برنامج حج";
    document.getElementById("tierTitle").textContent = tier.label;
    document.getElementById("tierDesc").textContent = tier.desc;
    document.title = tier.label + " | Golden Winner Tours";
}

function hdCardHTML(p) {
    const media = p.image
        ? '<img src="' + hdEscape(p.image) + '" alt="' + hdEscape(p.title) + '">'
        : '<div class="hd-media-fallback"><i class="fa-solid fa-kaaba"></i></div>';

    const badge = p.badge
        ? '<div class="hd-badge-wrap"><span class="hd-badge">' + hdEscape(p.badge) + '</span></div>'
        : '';

    const priceBlock = p.price
        ? '<div class="hd-price"><span>السعر للفرد</span><strong>' + hdEscape(p.price) + ' ' + hdEscape(p.currency || "جنيه") + '</strong></div>'
        : '<div></div>';

    return (
        '<article class="hd-card">' +
            badge +
            '<div class="hd-media">' + media + '</div>' +
            '<div class="hd-body">' +
                '<h3 class="hd-title">' + hdEscape(p.title || "") + '</h3>' +
                (p.duration ? '<p class="hd-duration">' + hdEscape(p.duration) + '</p>' : '') +
                '<p class="hd-desc">' + hdEscape(p.description || "") + '</p>' +
                '<div class="hd-foot">' +
                    priceBlock +
                    '<a href="index.html#contact" class="btn btn-gold">احجز الآن</a>' +
                '</div>' +
            '</div>' +
        '</article>'
    );
}

function hdSort(list) {
    return list.slice().sort(function (a, b) {
        const oa = Number(a.order) || 0;
        const ob = Number(b.order) || 0;
        if (oa !== ob) return oa - ob;
        return (a.title || "").localeCompare(b.title || "", "ar");
    });
}

function hdLoadPrograms() {
    const tierKey = hdGetTierFromUrl();
    hdApplyHead(tierKey);

    const grid = document.getElementById("hajjDetailGrid");
    const empty = document.getElementById("hajjDetailEmpty");

    if (typeof db === "undefined") {
        grid.innerHTML = "";
        empty.hidden = false;
        return;
    }

    db.collection("hajjPrograms").get().then(function (snapshot) {

        const items = [];
        snapshot.forEach(function (doc) {
            const data = doc.data();
            if (data.tier === tierKey) {
                data._id = doc.id;
                items.push(data);
            }
        });

        if (!items.length) {
            grid.innerHTML = "";
            empty.hidden = false;
            return;
        }

        empty.hidden = true;
        grid.innerHTML = hdSort(items).map(hdCardHTML).join("");

    }).catch(function (error) {
        console.error("Error loading hajj programs:", error);
        grid.innerHTML = "";
        empty.hidden = false;
        empty.querySelector("p").textContent = "استعدوا لتجربة مميزة مع برنامجنا الجديد التفاصيل والحجز ستتوفر قريبا";
    });
}

document.addEventListener("DOMContentLoaded", function () {

    hdLoadPrograms();

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("open");
        });
    }

    const themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            const icon = themeBtn.querySelector("i");
            icon.classList.toggle("fa-moon");
            icon.classList.toggle("fa-sun");
        });
    }
});
