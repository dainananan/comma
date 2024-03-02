$(document).ready(function() {
    $(".btn-nav").on("click", function() {
        $(this).toggleClass("on");
        const on = $(this).hasClass("on");
        console.log(on);
        if(on) {
            $("nav").stop().animate({
                "left" : "0"
            });
        } else {
            $("nav").stop().animate({
                "left" : "-300%"
            })
        }
    });
    
});