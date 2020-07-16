// 選單下捲 js
$('#menu-about').click(function (e) {
    $('html, body').animate({
        scrollTop: $('#about-section').offset().top
    })
})
$('#menu-logo').click(function (e) {
    $('html, body').animate({
        scrollTop: $('#about-section').offset().top - 120
    })
})
$('#menu-service').click(function (e) {
    $('html, body').animate({
        scrollTop: $('#service-section').offset().top - 110
    })
})
$('#menu-products').click(function (e) {
    $('html, body').animate({
        scrollTop: $('#products-section').offset().top - 90
    })
})
$('#menu-contact').click(function (e) {
    $('html, body').animate({
        scrollTop: $('#contact-section').offset().top - 110
    })
})

// fixed menu on scroll for desktop
if ($(window).width() > 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#navbar_top').addClass("fixed-top shadow");
            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
            $('#navbar_top').removeClass("fixed-top shadow");
            // remove padding top from body
            $('body').css('padding-top', '0');
        }
    });
}

//向下捲動
if (
    $(window).scroll(function (e) {
        if ($(window).scrollTop() <= 0) {
            $(".scroll").addClass("opacity1");
        } else {
            $(".scroll").removeClass("opacity1");
        }
    })
);

//aos.js
AOS.init({
    easing: 'ease-in-out-sine'
});