let aboutDistance = $("#about").offset().top
$(window).scroll(function(){
   let wScroll= $(window).scrollTop()
   if(wScroll > aboutDistance){
       $(".navbar").css("backgroundColor","black")
       $(".custum-nav .nav-link").css("color","white")

       $(".navbar img").attr("src","./img/logo-light.png")
       //$("nav").removeClass("navbar-light")
   // $("nav").addClass("custum-nav")
    $("nav .side-icons li a").removeClass("text-dark")
    $("nav .side-icons li a").addClass("text-light")

    
    //    $("nav").toggleClass("navbar-dark")

   }
})