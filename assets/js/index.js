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

  // Header Scroll JS Start
$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    header.toggleClass("fixed-header", $(window).scrollTop() > 0);
  });
});
// Header Scroll JS End

AOS.init();

// //Cookies JS Start
const cookiesBox = document.querySelector('.wrapper'),
  buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
  if (document.cookie.includes('AlexGolovanov')) return;
  cookiesBox.classList.add('show');

  // ---- ---- Button ---- ---- //
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookiesBox.classList.remove('show');

      // ---- ---- Time ---- ---- //
      if (button.id == 'acceptBtn') {
        document.cookie =
          'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
      }
    });
  });
};

window.addEventListener('load', executeCodes);

// //Cookies JS Start


// Window will go to top on reload 
window.onload = function() {
  window.scrollTo(0, 0);
};