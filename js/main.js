(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $(this).addClass('open');
                }).on('mouseout', function () {
                    $(this).removeClass('open');
                });
    
                // Attempt to close the dropdown when any item is clicked
                $('.navbar .dropdown .dropdown-menu .dropdown-item').click(function (e) {
                    // Prevent the default action to avoid navigation or page refresh
                    e.preventDefault();
    
                    // Close the dropdown menu manually
                    $(this).closest('.dropdown').removeClass('open');
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 30,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Related Post carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 30,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);


var buttons=document.querySelectorAll(".buttons .btns button");
var active=document.querySelector(".buttons .btns .active-btn");
active.style.left = "5px";
document.querySelector("#one p").style.fontSize="1.4rem";
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        buttons.forEach((btn)=>{
            btn.style.fontSize="1.2rem";
        })
        button.style.fontSize="1.4rem";
        var id=button.id;
        if(id==="one"){
            // active.style.left="22px";
            document.querySelector("#DryCleaning").style.display="flex";
            document.querySelector("#Laundry").style.display="none";
        }
        else if(id==="two"){
            // active.style.left="253px";
            document.querySelector("#DryCleaning").style.display="none";
            document.querySelector("#Laundry").style.display="flex";
        }
        var buttonLeft = button.offsetLeft;
        active.style.left = `${buttonLeft+7}px`;

        // Optionally, adjust the width of the .active-btn to match the clicked button
        var buttonWidth = button.offsetWidth;
        active.style.width = `${buttonWidth+7}px`;
    })
})

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
    $('.navbar-nav .nav-link').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
});




