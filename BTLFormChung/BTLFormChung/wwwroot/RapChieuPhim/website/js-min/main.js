$(document).on("click", function(e) {
    var target = $(e.target).closest(".btn-select");
    target.length || $(".btn-select").removeClass("active").find("ul").hide()
}), $(document).ready(function() {
    function toggleIcon(e) {
        $(e.target).prev(".panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus")
    }
    $(".carousel").bcSwipe({
        threshold: 50
    }), $("#loginLink").click(function(event) {
        event.preventDefault(), $("#login-modal").modal("show"), $('.nav-tabs a[href="#tab_login_1"]').tab("show"), $("#forgetpass-modal").modal("hide"), $("#success-modal").modal("hide")
    }), $("#loginLinkMobile").click(function(event) {
        event.preventDefault(), $("#login-modal").modal("show")
    }), $("#active-modal .close").click(function() {
        $("#active-modal").fadeToggle("fast"), $("#active-modal").modal("hide")
    }), $("#login-buyticket-modal .close").click(function() {
        $("#login-buyticket-modal").fadeToggle("fast")
    }), $("#locationLink").click(function(event) {
        event.preventDefault(), $("#location-modal").fadeToggle("fast")
    }), $("#locationLinkMobile").click(function(event) {
        event.preventDefault(), $("#location-modal").fadeToggle("fast")
    }), $("#location-modal .close").click(function() {
        $("#location-modal").fadeToggle("fast")
    }), $(".panel-group").on("hidden.bs.collapse", toggleIcon), $(".panel-group").on("shown.bs.collapse", toggleIcon), $('a[href="#tab_images"]').one("shown.bs.tab", function(e) {
        $(".slider-images").length && $(".slider-images").bxSlider({
            minSlides: 2,
            maxSlides: 4,
            slideMargin: 10,
            slideWidth: 180,
            controls: !0,
            infiniteLoop: !1,
            pager: !1,
            hideControlOnEnd: !0
        })
    }), navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? $(".slider-images-actors").length && $(".slider-images-actors").bxSlider({
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10,
        slideWidth: 180,
        controls: !0,
        infiniteLoop: !1,
        pager: !1,
        hideControlOnEnd: !0
    }) : $(".slider-images-actors").length && $(".slider-images-actors").bxSlider({
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10,
        slideWidth: 180,
        controls: !0,
        infiniteLoop: !1,
        pager: !1,
        hideControlOnEnd: !0,
        touchEnabled: !1
    }), $("#changepass").change(function() {
        $(this).is(":checked") ? $("#box-changepass").fadeIn("slow") : $("#box-changepass").fadeOut("slow")
    }), $('[data-toggle="tooltip"]').tooltip(), $("#list").click(function(event) {
        event.preventDefault(), $("#products .item").addClass("list-group-item")
    }), $("#grid").click(function(event) {
        event.preventDefault(), $("#products .item").removeClass("list-group-item"), $("#products .item").addClass("grid-group-item")
    }), $(".nav-toggle").click(function(event) {
        event.preventDefault(), $(this).toggleClass("active"), $(".navicon").toggleClass("fixed-mobile"), $(".galaxy-nav").toggleClass("open")
    })
});