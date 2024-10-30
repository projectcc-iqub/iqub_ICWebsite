

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
  $("#vertical-nav ul").removeClass("active");
  // navLinksUl.removeClass("active");


  this.classList.add("active");
  // alert($(this.parentNode));
  var tag = $(this).attr("tag");
  // alert(tag);
  // alert($("#nav-ul-"+tag).classList);
  $("#nav-ul-" + tag).addClass("active");
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

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
});

/**
 * Handle tab navigation
 */
$('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
  var $old_tab = $($(e.target).attr("href"));
  var $new_tab = $($(e.relatedTarget).attr("href"));

  if ($new_tab.index() < $old_tab.index()) {
    $old_tab.css('position', 'relative').css("right", "0").show();
    $old_tab.animate({ "right": "-100%" }, 300, function () {
      $old_tab.css("right", 0).removeAttr("style");
    });
  }
  else {
    $old_tab.css('position', 'relative').css("left", "0").show();
    $old_tab.animate({ "left": "-100%" }, 300, function () {
      $old_tab.css("left", 0).removeAttr("style");
    });
  }
});

$(".aviation-nav-link").click(function () {
  $(".aviation-nav-link").removeClass("active");

  $(this).addClass("active");
});

$("#sectionCoucouCommunity").on('mouseover', '.divImages', function () {
  // var content = $('.divImages');

  var content = $(this).closest('#sectionCoucouCommunity .divImages');
  // alert(content );

  if (content.hasClass('scrolling'))  content.stop();;
  var maxscroll = $(this)[0].scrollHeight
  content.animate({
    scrollTop: maxscroll
  }, 450);
});

$("#sectionCoucouCommunity").on('mouseout', '.divImages', function () {
  // var content = $('.divImages');
  var content = $(this).closest('#sectionCoucouCommunity .divImages');
  content.stop();
  content.addClass('scrolling');
  content.animate({
    scrollTop: 0
  }, 425, "linear", function () {
    content.removeClass('scrolling')
  });
});

/**
 * Handle JD load and show/hide.
 */
function showHideJd(fileIndex) {
  // if ($("#divJd" + fileIndex).html() == '') {
  //   $("#divJd" + fileIndex).load("jd" + fileIndex + ".html");
  // }

  $("#divJd" + fileIndex).slideToggle();
}

function chooseProject(projectId) {
  currentProjectId = projectId;
}

function openSitePage() {
  var selectedProject = $("#tabProjects li.active").attr("tag");
  switch (selectedProject) {
    case 'aviation':
      window.location.href = "/avaiation_screen.html";

      break;
    case 'coucou':
      window.location.href = "/coucou_screen.html";

      break;
    case 'h2storage':
      window.location.href = "/hydrogenstorage_screen.html";

      break;
  }
}