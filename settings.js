/* =========================================
   SITE SETTINGS LOADER
   بيجيب بيانات الإعدادات (اللوجو، الصور،
   الأرقام، الروابط) من Firestore ويطبقها
   على الموقع تلقائي
========================================= */

function applySiteSettings(settings) {

    if (!settings) {
        return;
    }

    /* اللوجو (النافبار + الفوتر) */
    if (settings.logo) {

        const siteLogo = document.getElementById("siteLogo");
        const footerLogo = document.getElementById("footerLogo");

        if (siteLogo) siteLogo.src = settings.logo;
        if (footerLogo) footerLogo.src = settings.logo;

    }

    /* صور السلايدر الرئيسية */
    [settings.heroImage1, settings.heroImage2, settings.heroImage3].forEach(function (url, i) {

        const slide = document.getElementById("heroSlide" + (i + 1));

        if (slide && url) {
            slide.style.backgroundImage = "url('" + url + "')";
        }

    });

    /* صورة "من نحن" */
    if (settings.aboutImage) {

        const aboutImage = document.getElementById("aboutImage");

        if (aboutImage) aboutImage.src = settings.aboutImage;

    }

    /* رقم الهاتف */
    if (settings.phone) {

        const phoneLink = document.getElementById("phoneLink");

        if (phoneLink) {
            phoneLink.setAttribute("href", "tel:" + settings.phone);
        }

    }

    /* رقم الواتساب */
    if (settings.whatsapp) {

        const socialWhatsapp = document.getElementById("socialWhatsapp");

        if (socialWhatsapp) {
            socialWhatsapp.setAttribute("href", "https://wa.me/" + settings.whatsapp);
        }

    }

    /* روابط السوشيال ميديا */
    if (settings.instagram) {
        const el = document.getElementById("socialInstagram");
        if (el) el.setAttribute("href", settings.instagram);
    }

    if (settings.facebook) {
        const el = document.getElementById("socialFacebook");
        if (el) el.setAttribute("href", settings.facebook);
    }

    if (settings.tiktok) {
        const el = document.getElementById("socialTiktok");
        if (el) el.setAttribute("href", settings.tiktok);
    }

    /* العنوان + الخريطة */
    if (settings.address) {

        const addressText = document.getElementById("addressText");
        const mapEmbed = document.getElementById("mapEmbed");

        if (addressText) addressText.textContent = settings.address;

        if (mapEmbed) {
            mapEmbed.src = "https://www.google.com/maps?q=" + encodeURIComponent(settings.address) + "&output=embed";
        }

    }

}


function loadSiteSettings() {

    if (typeof db === "undefined") {
        return;
    }

    db.collection("settings").doc("site").get().then(function (docSnap) {

        if (docSnap.exists) {
            applySiteSettings(docSnap.data());
        }

    }).catch(function (error) {

        console.error("Error loading site settings:", error);

    });

}


document.addEventListener("DOMContentLoaded", function () {

    loadSiteSettings();

});
