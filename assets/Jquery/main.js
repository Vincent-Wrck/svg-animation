$(document).ready(function () {

    // let currentId = $(this).attr('id');
    //        console.log(currentId);

    $('a[href^="#"]').click(function () {
        let navHref = $(this).attr("href");
        if (navHref === '#') {
            return;
        }

        $('html, body').animate({
            scrollTop: $(navHref).offset().top
        }, "300");

//        $('a').removeClass('current');
//        $(this).addClass('current');

        return false;
    });


});