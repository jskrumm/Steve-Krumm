(function ($) {
    $(".mobile-nav .menu-button").on("click", function () {
        var $nav = $(this).next();

        $nav.animate({"right" :  parseInt($nav.css('right'),10) >= 0 ? "-=200px" : "+=200px"}, "slow");

       
    });
})(jQuery);