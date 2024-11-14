

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

// $(".aviation-nav-link").click(function () {
//   $(".aviation-nav-link").removeClass("active");

//   $(this).addClass("active");
// });

$("#sectionCoucouCommunity").on('mouseover', '.divImages', function () {
  // var content = $('.divImages');

  var content = $(this).closest('#sectionCoucouCommunity .divImages');
  // alert(content );

  if (content.hasClass('scrolling')) content.stop();;
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
function showHideJd(fileIndex, obj) {
  // if ($("#divJd" + fileIndex).html() == '') {
  //   $("#divJd" + fileIndex).load("jd" + fileIndex + ".html");
  // }

  $("#divJd" + fileIndex).slideToggle();


  if (obj.classList.contains('cross')) {
    obj.classList.remove('cross');
    obj.classList.add('plus');

  } else {
    obj.classList.remove('plus');
    obj.classList.add('cross');
  }
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