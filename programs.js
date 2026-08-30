/* =========================================
   PROGRAMS LOADER
   بيجيب برامج الحج والعمرة من Firestore
   ويعرضهم في الموقع تلقائي
========================================= */

function createHajjCardHTML(program) {

    const featuredClass = program.featured ? " featured" : "";

    const badgeHTML = program.featured
        ? '<div class="popular">' + (program.badge || "الأكثر تميزًا") + '</div>'
        : "";

    return (
        '<article class="hajj-card' + featuredClass + '">' +
            badgeHTML +
            '<div class="hajj-icon"><i class="fa-solid fa-' + (program.icon || "kaaba") + '"></i></div>' +
            '<span>برنامج</span>' +
            '<h3>' + (program.title || "") + '</h3>' +
            '<p>' + (program.description || "") + '</p>' +
            '<a href="#contact">اعرف التفاصيل <i class="fa-solid fa-arrow-left"></i></a>' +
        '</article>'
    );

}


function createUmrahHTML(program) {

    return (
        '<div class="program-image">' +
            '<img src="' + (program.image || "images/3.jpg") + '" alt="' + (program.title || "") + '">' +
            '<span class="program-badge">' + (program.badge || "برنامج مميز") + '</span>' +
        '</div>' +
        '<div class="program-content">' +
            '<span class="program-category">' + (program.title || "") + '</span>' +
            '<h3>' + (program.duration || "") + '</h3>' +
            '<p class="program-description">' + (program.description || "") + '</p>' +
            '<div class="program-bottom">' +
                '<div class="price">' +
                    '<span>السعر للفرد - رباعي</span>' +
                    '<strong>' + (program.price || "") + ' <small>' + (program.currency || "جنيه") + '</small></strong>' +
                '</div>' +
                '<a href="#contact" class="btn btn-gold">احجز الآن <i class="fa-solid fa-arrow-left"></i></a>' +
            '</div>' +
        '</div>'
    );

}


function loadPrograms() {

    if (typeof db === "undefined") {
        return;
    }

    db.collection("programs").get().then(function (snapshot) {

        const hajjGrid = document.getElementById("hajjGrid");
        const umrahContainer = document.getElementById("umrahContainer");

        if (snapshot.empty) {
            /* مفيش بيانات لسه في Firestore، سيب الكارت الثابت زي ما هو */
            return;
        }

        const hajjPrograms = [];
        const umrahPrograms = [];

        snapshot.forEach(function (doc) {

            const data = doc.data();

            if (data.category === "hajj") {
                hajjPrograms.push(data);
            } else if (data.category === "umrah") {
                umrahPrograms.push(data);
            }

        });


        if (hajjGrid && hajjPrograms.length > 0) {

            hajjGrid.innerHTML = "";

            hajjPrograms.forEach(function (program) {

                hajjGrid.innerHTML += createHajjCardHTML(program);

            });

        }


        if (umrahContainer && umrahPrograms.length > 0) {

            umrahContainer.innerHTML = createUmrahHTML(umrahPrograms[0]);

        }

    }).catch(function (error) {

        console.error("Error loading programs:", error);

    });

}


document.addEventListener("DOMContentLoaded", function () {

    loadPrograms();

});