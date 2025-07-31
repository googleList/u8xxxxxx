(function(a) {
    a(".banner-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        nextArrow: ".arrow-ar",
        prevArrow: ".arrow-al",
        autoplaySpeed: 3000,
        infinite: true,
        speed: 400,
        fade: true,
        cssEase: "linear",
    });
    a(".game-main").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, ]
    });
    a(".match-main").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, ]
    });
    a(".brand-main").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, ]
    });
    a(".player-main").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, ]
    });
    a(".product-main").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, ]
    });
    a(".review-img-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        infinite: true,
        fade: true,
        asNavFor: ".review-txt-main",
    });
    a(".review-txt-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        fades: true,
        infinite: true,
        speed: 1500,
        fade: true,
        asNavFor: ".review-img-main",
    });
    a(".blog-main").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        nextArrow: ".blog-arrow .arrow-ar",
        prevArrow: ".blog-arrow .arrow-al",
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, ]
    });
    a(window).on("load", function() {
        a(".preloader").delay(1000).fadeOut(1000)
    });
    a(".menu-link, .abc, .cart").on("click", function() {
        a(".custom-menubar").slideUp(600)
    });
    var b = a("html, body");
    a(".navbar a , .backtotop a").on("click", function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var c = a(this.hash);
            c = c.length ? c : a('[name="' + this.hash.slice(1) + '"]');
            if (c.length) {
                b.animate({
                    scrollTop: c.offset().top - 65
                }, 1500);
                return false
            }
        }
    });
    a(window).scroll(function() {
        var c = a(this).scrollTop();
        var d = a(".sticky-top");
        if (c >= 100) {
            a(d).addClass("nav-bg")
        } else {
            a(d).removeClass("nav-bg")
        }
        if (c > 180) {
            a(".backtotop").fadeIn(500)
        } else {
            a(".backtotop").fadeOut(500)
        }
    });
    a("body").scrollspy({
        target: ".navbar",
        offset: 70,
    });
    a(".abc").on("click", function(c) {
        c.preventDefault();
        a(".search").addClass("open");
        a('.search > form > input[type="search"]').focus()
    });
    a(".search, .search button.close").on("click keyup", function(c) {
        if (c.target == this || c.target.className == "close" || c.keyCode == 27) {
            a(this).removeClass("open")
        }
    });
    a(".fix-close").on("click", function() {
        a(".top-search").removeClass("open")
    });
    a(".menu-icon").on("click", function() {
        a(".custom-menubar").slideDown(600)
    });
    a(".hide-menu-btn").on("click", function() {
        a(".custom-menubar").slideUp(600)
    });
    a(".venobox").venobox();
    a(".counter").counterUp();
}(jQuery));
