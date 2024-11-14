var userScroll = false;

// // detect browser/user scroll
// $(document).scroll(function () {

$(document).bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function (e) {
    console.log('Scroll initiated by ' + (userScroll == true ? "user" : "browser"));

    if (e.which > 0 || e.type == "mousedown" || e.type == "mousewheel" || e.type == "wheel" || e.type == "touchmove") {
        userScroll = false;
    }


    console.log('Scroll initiated by ' + (userScroll == true ? "user" : "browser"));

    if (userScroll == false) {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 60; // Adjust for fixed nav height
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }

        });

        // If no section is detected (e.g., top of page), default to the first section
        if (window.scrollY < sections[0].offsetTop) {
            current = sections[0].getAttribute('id');
        }

        $(".nav-link").removeClass("active");
        // $(".vertical-nav ul").removeClass("active");
        $("#vertical-nav ul").removeClass("active");

        navLinks.forEach((link) => {

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
                var tag = link.getAttribute("tag");
                $("#nav-ul-" + tag).addClass("active");
                // $(link.parentNode.parentNode).classList.addClass("active");
            }
        });
    }
});

/**
 * Handle Right navigation bar
 */
$("#menu-toggle").click(function () {
    $("#vertical-nav").toggleClass("show");

    if (this.classList.contains('cross')) {
        this.classList.remove('cross');
        this.classList.add('plus');

    } else {
        this.classList.remove('plus');
        this.classList.add('cross');
    }

});

/**
 * Handle Menu active/inactive according to scroll position
 */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const navLinksUl = document.querySelectorAll("#vertical-nav ul");

$(".nav-link").click(function () {
    $(".nav-link").removeClass("active");

    if ($("#vertical-nav ul") != undefined) {
        $("#vertical-nav ul").removeClass("active");
    }
    // navLinksUl.removeClass("active");


    this.classList.add("active");
    // alert($(this.parentNode));
    var tag = $(this).attr("tag");
    // alert(tag);
    // alert($("#nav-ul-"+tag).classList);
    $("#nav-ul-" + tag).addClass("active");
    userScroll = true;
});

// window.addEventListener("scroll", () => {
//     let current = "";

//     sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (scrollY >= sectionTop - sectionHeight / 3) {
//             current = section.getAttribute("id");
//         }
//     });

//     $(".nav-link").removeClass("active");
//     // $(".vertical-nav ul").removeClass("active");
//     $("#vertical-nav ul").removeClass("active");

//     navLinks.forEach((link) => {

//         if (link.getAttribute("href") === `#${current}`) {
//             link.classList.add("active");
//             var tag = link.getAttribute("tag");
//             $("#nav-ul-" + tag).addClass("active");
//             // $(link.parentNode.parentNode).classList.addClass("active");
//         }
//     });
// });
