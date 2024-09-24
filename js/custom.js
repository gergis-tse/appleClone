
  let footer = $(".footer-links-wrapper h3").click(function () {
    if ($(window).width() <= 768) {
      let ul = $(this).next("ul");
      ul.slideToggle();
      $(this).toggleClass("expanded");
    }
  });

  $(window).resize(function () {
    location.reload()
    // if ($(this).width() > 768) {
    //   $(".footer-links-wrapper ul ").show();
    //   $(".footer-links-wrapper h3").removeClass("expanded");
    // }
    // else{
    //   $(".footer-links-wrapper ul ").hide();
     
    // }
  });










 









// const studentName = "Abebe";
// // const greeting = "Hello, my name is" +" " +studentName;
// const greeting=`Hello,my name is ${studentName}`
// console.log(greeting);