$(document).ready(function() {
    $("div.menu__icon").on("click", function() {
        $("#burger-menu").toggle(3000);
    })
    $("div.menu__icon").on("click", function() {
        $("#circle").toggle('slow');
    })
    $(".menu__icon").on("click", function() {
        if ($('.burger-menu ').css('display') == 'none') { $(".check").removeClass('full-width'); } else if ($('.burger-menu ').css('display') == 'block') {
            $(".check").addClass('full-width');
        }
    })

})