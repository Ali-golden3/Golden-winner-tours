/* =========================================
   UMRAH PROGRAMS PAGE LOADER
   بيجيب كل برامج العمرة من Firestore
   ويعرضهم ككروت في umrah.html
========================================= */

function createUmrahCardHTML(program) {

    const imageSrc = program.image || "images/3.jpg";
    const badge = program.badge || "برنامج عمرة";

    return (
        '<article class="umrah-page-card">' +

            '<div class="upc-image">' +
                '<img src="' + imageSrc + '" alt="' + (program.title || "") + '">' +
                '<span class="upc-badge">' + badge + '</span>' +
            '</div>' +

            '<div class="upc-content">' +

                '<h3>' + (program.title || "") + '</h3>' +

                (program.duration ? '<div class="upc-duration"><i class="fa-solid fa-calendar-days"></i> ' + program.duration + '</div>' : '') +

                '<p class="upc-desc">' + (program.description || "") + '</p>' +

                '<div class="upc-bottom">' +

                    '<div class="upc-price">' +
                        '<span>السعر للفرد - رباعي</span>' +
                        '<strong>' + (program.price || "") + ' <small>' + (program.currency || "جنيه") + '</small></strong>' +
                    '</div>' +

                    '<a href="index.html#contact" class="btn btn-gold">' +
                        'احجز الآن <i class="fa-solid fa-arrow-left"></i>' +
                    '</a>' +

                '</div>' +

            '</div>' +

        '</article>'
    );

}


function loadAllUmrahPrograms() {

    const grid = document.getElementById("umrahAllGrid");

    if (!grid || typeof db === "undefined") {
        return;
    }

    db.collection("programs").where("category", "==", "umrah").get().then(function (snapshot) {

        if (snapshot.empty) {

            grid.innerHTML =
                '<div class="umrah-empty">' +
                    '<i class="fa-solid fa-inbox" style="font-size:28px;color:var(--gold);display:block;margin-bottom:12px;"></i>' +
                    'لا توجد برامج عمرة متاحة حاليًا، تابعنا قريبًا.' +
                '</div>';

            return;

        }

        const programs = [];

        snapshot.forEach(function (doc) {
            programs.push(doc.data());
        });

        /* البرامج المميزة (Featured) تظهر الأول */
        programs.sort(function (a, b) {
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        });

        grid.innerHTML = "";

        programs.forEach(function (program) {
            grid.innerHTML += createUmrahCardHTML(program);
        });

    }).catch(function (error) {

        console.error("Error loading umrah programs:", error);

        grid.innerHTML =
            '<div class="umrah-empty">حصل خطأ في تحميل البرامج، حاول تحدّث الصفحة.</div>';

    });

}


document.addEventListener("DOMContentLoaded", function () {

    loadAllUmrahPrograms();

});