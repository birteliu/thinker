///////////////// fixed menu on scroll for desktop
if ($(window).width() > 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#navbar_top').addClass("fixed-top");
            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
            $('#navbar_top').removeClass("fixed-top");
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