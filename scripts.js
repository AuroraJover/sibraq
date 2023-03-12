$(document).ready(function(){
    $(".burger").click(function(){
        $(".menu").toggleClass("activo")
        $("header").toggleClass("activo")
    });
    $(".menu").click(function(){
        $(this).removeClass("activo")
    });
    $(".burger").click(function(){
        $(".linea").toggleClass("activo")
    });
    $(".burger").click(function(){
        $(this).removeClass("activo")
    });
    $(".burger").click(function () {
        $("body").toggleClass("activo");
      });
      
    $(".burger").click(function () {
        $("body").removeClass("activo");
    
    });
    $(".menu").click(function () {
        $("body").removeClass("activo");
        $("header").removeClass("activo");
        $("burger").removeClass("activo");
        $(".linea").removeClass("activo");
    });
    $(".menu__list").click(function () {
        $("body").removeClass("activo");
        $("header").removeClass("activo");
        $("burger").removeClass("activo");
        $(".linea").removeClass("activo");
    });
    $(".seccionfaq__titulo").click(function(){
        
        $(this).siblings("activo").removeClass(".activo");
        $(this).siblings().slideToggle();
        $(this).toggleClass("activo");
        
    });

});