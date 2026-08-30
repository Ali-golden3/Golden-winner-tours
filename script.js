/* =========================================
   GOLDEN WINNER TOURS
   MAIN JAVASCRIPT
========================================= */

/* =========================================
   TRANSLATIONS (AR / EN)
========================================= */

const translations = {

    "nav-home": { ar: "الرئيسية", en: "Home" },
    "nav-about": { ar: "من نحن", en: "About" },
    "nav-services": { ar: "خدماتنا", en: "Services" },
    "nav-hajj": { ar: "الحج", en: "Hajj" },
    "nav-umrah": { ar: "العمرة", en: "Umrah" },
    "nav-tourism": { ar: "السياحة", en: "Tourism" },
    "nav-contact": { ar: "تواصل معنا", en: "Contact" },

    "hero-tag": { ar: "منذ 1984", en: "Since 1984" },
    "hero-h1": { ar: "رحلتك تبدأ من هنا", en: "Your journey starts here" },
    "hero-h2": { ar: "مع جولدن وينر للسياحة", en: "With Golden Winner Tours" },
    "hero-p": {
        ar: "برامج حج وعمرة مميزة تليق بكم، وتنظيم رحلات سياحية بخدمة واهتمام من أول خطوة حتى العودة.",
        en: "Premium Hajj and Umrah programs, plus organized tourism trips with dedicated service from the first step until you return."
    },
    "hero-btn-umrah": { ar: "اكتشف برامج العمرة", en: "Explore Umrah Programs" },
    "hero-btn-contact": { ar: "تواصل معنا", en: "Contact Us" },

    "about-label": { ar: "جولدن وينر للسياحة", en: "Golden Winner Tours" },
    "about-h2": { ar: "رحلة من الثقة والخبرة", en: "A Journey of Trust and Experience" },
    "about-exp-label": { ar: "خبرة في خدمة ضيوف الرحمن", en: "Years serving pilgrims" },
    "about-tag": { ar: "خبرة تليق بثقتكم", en: "Experience worthy of your trust" },
    "about-h3": {
        ar: "شركة سياحية متخصصة في خدمة ضيوف الرحمن",
        en: "A travel company specialized in serving pilgrims"
    },
    "about-p1": {
        ar: "جولدن وينر للسياحة شركة سياحية متخصصة في خدمة ضيوف الرحمن منذ عام 1984، نقدم برامج حج وعمرة مميزة، بالإضافة إلى تنظيم الرحلات السياحية وتسهيل كافة الإجراءات.",
        en: "Golden Winner Tours has specialized in serving pilgrims since 1984. We offer premium Hajj and Umrah programs, along with organized tourism trips and full assistance with all procedures."
    },
    "about-p2": {
        ar: "نحرص على تقديم تجربة منظمة ومريحة، بداية من اختيار البرنامج والفنادق وحتى العودة إلى أرض الوطن.",
        en: "We ensure a smooth, well-organized experience — from choosing your program and hotels all the way back home."
    },
    "about-info1-title": { ar: "ترخيص رقم 496", en: "License No. 496" },
    "about-info1-desc": { ar: "مرخصة فئة (أ)", en: "Category (A) licensed" },
    "about-info2-title": { ar: "برامج حج وعمرة", en: "Hajj & Umrah Programs" },
    "about-info2-desc": { ar: "مميزة وفاخرة تليق بكم", en: "Premium programs worthy of you" },

    "services-label": { ar: "خدماتنا", en: "Our Services" },
    "services-h2": { ar: "كل تفاصيل رحلتك علينا", en: "Every detail of your trip, handled" },
    "services-p": {
        ar: "خدمات متكاملة تجعل رحلتك أكثر راحة واطمئنانًا.",
        en: "Complete services that make your trip more comfortable and reassuring."
    },

    "svc1-title": { ar: "الحج والعمرة", en: "Hajj & Umrah" },
    "svc1-desc": { ar: "برامج مميزة لضيوف الرحمن مع تنظيم ومتابعة مستمرة.", en: "Premium programs for pilgrims with organization and constant follow-up." },
    "svc2-title": { ar: "الطيران", en: "Flights" },
    "svc2-desc": { ar: "تنظيم حجوزات الطيران واختيار الرحلات المناسبة.", en: "Flight booking arrangements and choosing the best routes." },
    "svc3-title": { ar: "الفنادق", en: "Hotels" },
    "svc3-desc": { ar: "فنادق مختارة بعناية بالقرب من الأماكن المقدسة.", en: "Carefully selected hotels near the holy sites." },
    "svc4-title": { ar: "الانتقالات", en: "Transfers" },
    "svc4-desc": { ar: "انتقالات مريحة بسيارات حديثة ومنظمة.", en: "Comfortable transfers with modern, organized vehicles." },
    "svc5-title": { ar: "التأشيرات", en: "Visas" },
    "svc5-desc": { ar: "تسهيل إجراءات التأشيرة والباركود.", en: "Hassle-free visa and barcode processing." },
    "svc6-title": { ar: "الإشراف والمتابعة", en: "Supervision & Follow-up" },
    "svc6-desc": { ar: "متابعة مستمرة واهتمام بتفاصيل رحلتك.", en: "Constant follow-up and attention to every detail of your trip." },

    "umrah-label": { ar: "برامج العمرة", en: "Umrah Programs" },
    "umrah-h2": { ar: "عمرة تليق بضيوف الرحمن", en: "An Umrah worthy of pilgrims" },
    "umrah-p": {
        ar: "اختر البرنامج المناسب لك ودع علينا ترتيب التفاصيل.",
        en: "Choose the program that suits you and leave the details to us."
    },
    "umrah-badge": { ar: "برنامج مميز", en: "Featured Program" },
    "umrah-category": { ar: "عمرة البركة", en: "Al-Baraka Umrah" },
    "umrah-duration": { ar: "15 يوم / 14 ليلة", en: "15 Days / 14 Nights" },
    "umrah-desc": {
        ar: "جمعتان في الحرمين مع إقامة مميزة في مكة والمدينة وخدمات متكاملة.",
        en: "Two Fridays at the Two Holy Mosques with premium stays in Makkah and Madinah and full services."
    },
    "detail-travel-label": { ar: "السفر", en: "Travel Date" },
    "detail-travel-value": { ar: "10 سبتمبر", en: "September 10" },
    "detail-route-label": { ar: "المسار", en: "Route" },
    "detail-route-value": { ar: "القاهرة → المدينة → جدة → القاهرة", en: "Cairo → Madinah → Jeddah → Cairo" },
    "detail-makkah-label": { ar: "مكة", en: "Makkah" },
    "detail-makkah-value": { ar: "الماسة جراند", en: "Al-Massa Grand" },
    "detail-madinah-label": { ar: "المدينة", en: "Madinah" },
    "detail-madinah-value": { ar: "درة الإيمان", en: "Durrat Al-Eiman" },
    "detail-flight-label": { ar: "الطيران", en: "Airline" },
    "detail-flight-value": { ar: "إير كايرو", en: "Air Cairo" },
    "included-title": { ar: "البرنامج شامل:", en: "Program includes:" },
    "inc1": { ar: "التأشيرة", en: "Visa" },
    "inc2": { ar: "الباركود", en: "Barcode" },
    "inc3": { ar: "التنقلات", en: "Transfers" },
    "inc4": { ar: "الهدايا", en: "Gifts" },
    "inc5": { ar: "الإشراف", en: "Supervision" },
    "price-label": { ar: "السعر للفرد - رباعي", en: "Price per person - Quad" },
    "price-currency": { ar: "جنيه", en: "EGP" },
    "umrah-btn": { ar: "احجز الآن", en: "Book Now" },

    "hajj-label": { ar: "برامج الحج", en: "Hajj Programs" },
    "hajj-h2": { ar: "برامج حج مميزة وفاخرة", en: "Premium and Luxury Hajj Programs" },
    "hajj-p": {
        ar: "تنظيم متكامل وخدمات تليق بضيوف الرحمن.",
        en: "Complete organization and services worthy of pilgrims."
    },
    "hajj-card-tag": { ar: "برنامج", en: "Program" },
    "hajj1-title": { ar: "الحج المميز", en: "Premium Hajj" },
    "hajj1-desc": { ar: "إقامة وخدمات مميزة مع تنظيم كامل للرحلة.", en: "Premium accommodation and services with full trip organization." },
    "hajj1-link": { ar: "اعرف التفاصيل", en: "Learn More" },
    "hajj2-badge": { ar: "الأكثر تميزًا", en: "Most Popular" },
    "hajj2-title": { ar: "الحج المميز", en: "Premium Hajj" },
    "hajj2-desc": { ar: "إقامة وخدمات مميزة مع تنظيم كامل للرحلة.", en: "Premium accommodation and services with full trip organization." },
    "hajj2-link": { ar: "اعرف التفاصيل", en: "Learn More" },
    "hajj3-title": { ar: "الحج الفاخر", en: "Luxury Hajj" },
    "hajj3-desc": { ar: "برنامج فاخر بخدمات متكاملة واهتمام بكل تفاصيل الرحلة.", en: "A luxury program with complete services and attention to every detail." },
    "hajj3-link": { ar: "اعرف التفاصيل", en: "Learn More" },

    "tourism-label": { ar: "السياحة", en: "Tourism" },
    "tourism-h2": { ar: "اكتشف العالم معنا", en: "Discover the World With Us" },
    "tourism-p": {
        ar: "ننظم رحلات سياحية مميزة داخل وخارج مصر، مع اختيار أفضل البرامج والخدمات التي تناسب احتياجاتك.",
        en: "We organize premium tourism trips inside and outside Egypt, choosing the best programs and services to suit your needs."
    },
    "tourism-btn": { ar: "استفسر عن رحلتك", en: "Ask About Your Trip" },
    "stat1-label": { ar: "بداية الخبرة", en: "Since" },
    "stat2-label": { ar: "خدمات مميزة", en: "Premium Service" },
    "stat3-label": { ar: "متابعة مستمرة", en: "Support" },

    "cta-tag": { ar: "جاهز تبدأ رحلتك؟", en: "Ready to start your journey?" },
    "cta-h2": { ar: "خليك مطمئن... إحنا نرتب كل شيء", en: "Relax — we'll arrange everything" },
    "cta-p": { ar: "تواصل معنا واختار البرنامج المناسب لك.", en: "Contact us and choose the program that suits you." },
    "cta-btn": { ar: "تواصل معنا", en: "Contact Us" },

    "contact-label": { ar: "تواصل معنا", en: "Contact Us" },
    "contact-h2": { ar: "نحن في خدمتك", en: "We're at Your Service" },
    "contact-p": {
        ar: "تواصل معنا لمعرفة تفاصيل البرامج والحجز والاستفسارات.",
        en: "Reach out to learn about our programs, bookings, and any questions."
    },
    "contact-phone-label": { ar: "الهاتف", en: "Phone" },
    "contact-phone-value": { ar: "اتصل بنا", en: "Call Us" },
    "contact-address-label": { ar: "العنوان", en: "Address" },
    "contact-address-value": { ar: "القاهرة - مصر", en: "Cairo, Egypt" },
    "contact-hours-label": { ar: "مواعيد العمل", en: "Working Hours" },
    "contact-hours-value": { ar: "يوميًا", en: "Daily" },

    "modal-brand": { ar: "جولدن وينر للسياحة", en: "Golden Winner Tours" },
    "modal-h2": { ar: "تواصل معنا", en: "Contact Us" },
    "modal-p": { ar: "املأ البيانات وسنتواصل معك في أقرب وقت.", en: "Fill in your details and we'll get back to you shortly." },
    "label-name": { ar: "الاسم", en: "Name" },
    "placeholder-name": { ar: "اكتب اسمك", en: "Enter your name" },
    "label-phone": { ar: "رقم الهاتف", en: "Phone Number" },
    "label-program": { ar: "اختر البرنامج", en: "Choose a Program" },
    "option-default": { ar: "اختر البرنامج", en: "Choose a program" },
    "option-umrah": { ar: "عمرة البركة", en: "Al-Baraka Umrah" },
    "option-hajj1": { ar: "الحج المميز", en: "Premium Hajj" },
    "option-hajj2": { ar: "الحج الفاخر", en: "Luxury Hajj" },
    "option-tourism": { ar: "رحلات سياحية", en: "Tourism Trips" },
    "label-message": { ar: "الاستفسار", en: "Your Message" },
    "placeholder-message": { ar: "اكتب استفسارك هنا...", en: "Write your inquiry here..." },
    "submit-btn": { ar: "إرسال الاستفسار", en: "Send Inquiry" },

    "footer-about-p": {
        ar: "جولدن وينر للسياحة شركة سياحية متخصصة في خدمة ضيوف الرحمن منذ 1984.",
        en: "Golden Winner Tours has specialized in serving pilgrims since 1984."
    },
    "footer-links-title": { ar: "روابط سريعة", en: "Quick Links" },
    "footer-services-title": { ar: "خدماتنا", en: "Our Services" },
    "footer-company-title": { ar: "بيانات الشركة", en: "Company Info" },
    "footer-license1": { ar: "ترخيص رقم 496", en: "License No. 496" },
    "footer-license2": { ar: "مرخصة فئة (أ)", en: "Category (A) licensed" },
    "footer-license3": { ar: "برامج حج وعمرة ورحلات سياحية", en: "Hajj, Umrah and tourism programs" },
    "footer-rights": { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },

    "form-required-alert": { ar: "من فضلك أكمل جميع البيانات.", en: "Please fill in all the fields." },
    "form-phone-alert": { ar: "من فضلك أدخل رقم هاتف صحيح.", en: "Please enter a valid phone number." },
    "form-success-alert": { ar: "تم استلام استفسارك بنجاح 🌟", en: "Your inquiry was received successfully 🌟" },
    "form-success-name": { ar: "الاسم", en: "Name" },
    "form-success-phone": { ar: "الهاتف", en: "Phone" },
    "form-success-program": { ar: "البرنامج", en: "Program" }

};


let currentLang = localStorage.getItem("gwt-lang") || "ar";


function applyLanguage(lang) {

    currentLang = lang;

    const htmlRoot = document.getElementById("htmlRoot");

    if (htmlRoot) {

        htmlRoot.setAttribute("lang", lang);
        htmlRoot.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    }


    document.querySelectorAll("[data-i18n]").forEach(function (el) {

        const key = el.getAttribute("data-i18n");

        if (translations[key] && translations[key][lang] !== undefined) {

            el.textContent = translations[key][lang];

        }

    });


    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {

        const key = el.getAttribute("data-i18n-placeholder");

        if (translations[key] && translations[key][lang] !== undefined) {

            el.setAttribute("placeholder", translations[key][lang]);

        }

    });


    const langBtn = document.getElementById("langBtn");

    if (langBtn) {

        langBtn.textContent = lang === "ar" ? "EN" : "AR";

    }


    localStorage.setItem("gwt-lang", lang);

}


function translate(key) {

    if (translations[key] && translations[key][currentLang] !== undefined) {

        return translations[key][currentLang];

    }

    return "";

}


/* =========================================
   SITE SETTINGS LOADER
   بيجيب اللوجو / صور السلايدر / صورة "من نحن" /
   رقم الهاتف / العنوان / لينكات السوشيال ميديا
   من Firestore (settings/site) ويطبقهم على الموقع
========================================= */

function loadSiteSettings() {

    if (typeof db === "undefined") {
        return;
    }

    db.collection("settings").doc("site").get().then(function (doc) {

        if (!doc.exists) {
            return;
        }

        const s = doc.data();

        const logoImg = document.getElementById("siteLogo");
        if (logoImg && s.logo) {
            logoImg.src = s.logo;
        }

        const hero1 = document.getElementById("heroSlide1");
        if (hero1 && s.heroImage1) {
            hero1.style.backgroundImage = "url('" + s.heroImage1 + "')";
        }

        const hero2 = document.getElementById("heroSlide2");
        if (hero2 && s.heroImage2) {
            hero2.style.backgroundImage = "url('" + s.heroImage2 + "')";
        }

        const hero3 = document.getElementById("heroSlide3");
        if (hero3 && s.heroImage3) {
            hero3.style.backgroundImage = "url('" + s.heroImage3 + "')";
        }

        const aboutImg = document.getElementById("aboutImage");
        if (aboutImg && s.aboutImage) {
            aboutImg.src = s.aboutImage;
        }

        const phoneLink = document.getElementById("phoneLink");
        if (phoneLink && s.phone) {
            phoneLink.setAttribute("href", "tel:" + s.phone);
        }

        const addressText = document.getElementById("addressText");
        if (addressText && s.address) {
            addressText.textContent = s.address;
        }

        const waLink = document.getElementById("socialWhatsapp");
        if (waLink && s.whatsapp) {
            waLink.setAttribute("href", "https://wa.me/" + s.whatsapp);
        }

        const igLink = document.getElementById("socialInstagram");
        if (igLink && s.instagram) {
            igLink.setAttribute("href", s.instagram);
        }

        const fbLink = document.getElementById("socialFacebook");
        if (fbLink && s.facebook) {
            fbLink.setAttribute("href", s.facebook);
        }

        const ttLink = document.getElementById("socialTiktok");
        if (ttLink && s.tiktok) {
            ttLink.setAttribute("href", s.tiktok);
        }

    }).catch(function (error) {

        console.error("Error loading site settings:", error);

    });

}


document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       SITE SETTINGS (logo, hero, about, contact info)
    ===================================== */

    loadSiteSettings();

    /* =====================================
       LANGUAGE TOGGLE
    ===================================== */

    applyLanguage(currentLang);

    const langBtn = document.getElementById("langBtn");

    if (langBtn) {

        langBtn.addEventListener("click", function () {

            applyLanguage(currentLang === "ar" ? "en" : "ar");

        });

    }


    /* =====================================
       NAVBAR SCROLL
    ===================================== */

    const navbar = document.getElementById("navbar");

    if (navbar) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        });

    }


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("open");

            const icon = menuBtn.querySelector("i");

            if (navMenu.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* Close menu after clicking a link */

        const navLinks =
            document.querySelectorAll(".nav-link");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("open");

                const icon =
                    menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /*   HERO SLIDER */

    const slides =
        document.querySelectorAll(".hero-slide");

    const dots =
        document.querySelectorAll(".dot");

    const nextBtn =
        document.getElementById("nextSlide");

    const prevBtn =
        document.getElementById("prevSlide");

    let currentSlide = 0;
    let sliderInterval = null;

    function showSlide(index) {

        if (slides.length === 0) {
            return;
        }

        if (index >= slides.length) {
            currentSlide = 0;
        }

        else if (index < 0) {
            currentSlide = slides.length - 1;
        }

        else {
            currentSlide = index;
        }


        slides.forEach(function (slide) {

            slide.classList.remove("active");

        });


        dots.forEach(function (dot) {

            dot.classList.remove("active");

        });


        slides[currentSlide].classList.add("active");

        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }

    }

    function startSliderInterval() {

        sliderInterval = setInterval(function () {

            showSlide(currentSlide + 1);

        }, 6000);

    }

    function resetSliderInterval() {

        clearInterval(sliderInterval);
        startSliderInterval();

    }


    if (nextBtn) {

        nextBtn.addEventListener("click", function () {

            showSlide(currentSlide + 1);
            resetSliderInterval();

        });

    }


    if (prevBtn) {

        prevBtn.addEventListener("click", function () {

            showSlide(currentSlide - 1);
            resetSliderInterval();

        });

    }


    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            showSlide(index);
            resetSliderInterval();

        });

    });


    /* Automatic slider */

    if (slides.length > 0) {

        startSliderInterval();

    }


    /* =====================================
       DARK MODE
    ===================================== */

    const themeBtn =
        document.getElementById("themeBtn");

    if (themeBtn) {

        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const icon =
                themeBtn.querySelector("i");

            if (
                document.body.classList.contains("dark-mode")
            ) {

                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");

            } else {

                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");

            }

        });

    }


    /* =====================================
       ACTIVE NAV LINK
    ===================================== */

    const sections =
        document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                current = section.getAttribute("id");

            }

        });


        document
            .querySelectorAll(".nav-link")
            .forEach(function (link) {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add("active");

                }

            });

    });


    /* =====================================
       SIMPLE REVEAL ANIMATION
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .hajj-card, .contact-card, .about-content, .program-featured"
        );


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    });


    /* =========================================
       CONTACT FORM
    ========================================= */

    const contactModal = document.getElementById("contactModal");
    const closeContact = document.getElementById("closeContact");
    const contactOverlay = document.getElementById("contactOverlay");
    const contactForm = document.getElementById("contactForm");


    /* فتح الفورم */
    function openContactForm() {

        if (contactModal) {

            contactModal.classList.add("show");
            document.body.classList.add("modal-open");

        }

    }
    window.openContactForm = openContactForm;
function closeContactForm() {

        if (contactModal) {

            contactModal.classList.remove("show");
            document.body.classList.remove("modal-open");

        }

    }
window.closeContactForm = closeContactForm;

    /* أزرار تواصل معنا (فقط الأزرار اللي بتفتح الفورم بدل التنقل العادي للسكشن) */

    const contactButtons = document.querySelectorAll(
        'a[href="#contact"]'
    );

    contactButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            openContactForm();

        });

    });


    /* زر X */

    if (closeContact) {

        closeContact.addEventListener(
            "click",
            closeContactForm
        );

    }


    /* الضغط على الخلفية */

    if (contactOverlay) {

        contactOverlay.addEventListener(
            "click",
            closeContactForm
        );

    }


    /* زر ESC */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                contactModal &&
                event.key === "Escape" &&
                contactModal.classList.contains("show")
            ) {

                closeContactForm();

            }

        }
    );


    /* إرسال الفورم */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const nameField = document.getElementById("customerName");
                const phoneField = document.getElementById("customerPhone");
                const programField = document.getElementById("programSelect");
                const messageField = document.getElementById("customerMessage");

                const name = nameField ? nameField.value.trim() : "";
                const phone = phoneField ? phoneField.value.trim() : "";
                const program = programField ? programField.value : "";
                const message = messageField ? messageField.value.trim() : "";


                if (
                    !name ||
                    !phone ||
                    !program ||
                    !message
                ) {

                    alert(translate("form-required-alert"));
                    return;

                }


                const phoneRegex = /^[0-9+\s]{8,15}$/;

                if (!phoneRegex.test(phone)) {

                    alert(translate("form-phone-alert"));
                    return;

                }


                /* حفظ الرسالة في Firestore عشان تظهر في لوحة التحكم */

                if (typeof db !== "undefined") {

                    db.collection("messages").add({
                        name: name,
                        phone: phone,
                        program: program,
                        message: message,
                        read: false,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    }).catch(function (error) {

                        console.error("Error saving message:", error);

                    });

                }


                alert(
                    translate("form-success-alert") + "\n\n" +
                    translate("form-success-name") + ": " + name + "\n" +
                    translate("form-success-phone") + ": " + phone + "\n" +
                    translate("form-success-program") + ": " + program
                );


                contactForm.reset();
                closeContactForm();

            }
        );

    }


});