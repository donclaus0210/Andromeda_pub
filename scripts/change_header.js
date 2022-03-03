$(function() {
    $(window).on("scroll", function() {
        if(isScrolledIntoView(document.getElementById('main'))){
            $(".header").removeClass("header_scrolled");
            $(".header_mobile").removeClass("header_mobile_scrolled");
            document.getElementById("header_img").src = "img/logo_novo_white.svg"
            document.getElementsByClassName("header_img_mobile")[0].src = "img/logo_novo_white.svg"
        }
        else if(isScrolledIntoView(document.getElementById('servicos'))){
            $(".header").addClass("header_scrolled");
            $(".header_mobile").addClass("header_mobile_scrolled");
            document.getElementById("header_img").src = "img/logo_novo.svg"
            document.getElementsByClassName("header_img_mobile")[0].src = "img/logo_novo.svg"
        }
        else if(isScrolledIntoView(document.getElementById('sobre'))){
            $(".header").removeClass("header_scrolled");
            $(".header_mobile").removeClass("header_mobile_scrolled");
            document.getElementById("header_img").src = "img/logo_novo_white.svg"
            document.getElementsByClassName("header_img_mobile")[0].src = "img/logo_novo_white.svg"
        }
        else if(isScrolledIntoView(document.getElementById('contato'))){
            $(".header").addClass("header_scrolled");
            $(".header_mobile").addClass("header_mobile_scrolled");
            document.getElementById("header_img").src = "img/logo_novo.svg"
            document.getElementsByClassName("header_img_mobile")[0].src = "img/logo_novo.svg"
        }
    });
});