// Toggle Menu Functionaliy Start

$(document).ready(function () {
    $(".menu-icon").click(function () {
      $("body").addClass("menuToggle");
    });
    $(".close-icon").click(function () {
      $("body").removeClass("menuToggle");
    });
  });
  
  // Toggle Menu Functionaliy End

  // Read More Functionality JS Start

$('.subpage-readmore-btn').click(function (e) {
    e.preventDefault();
    // console.log('click');
    $(this).parent().prev().slideToggle('slow');
    // $('.subpage-exp-content').slideToggle('slow');
    $(this).text($(this).text() == 'Read Less' ? 'Read More' : 'Read Less');
  });
  
  // Read More Functionality JS end