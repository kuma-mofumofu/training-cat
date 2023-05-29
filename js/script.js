$(function () {

  /* ===============================================
  # ページtopボタンをスクロールで移動させる
  =============================================== */
  $('.page_top--inner').on("click", function(){

    const speed = 500;// スクロールの速度
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top;

    $('html').animate({scrollTop: position}, speed, 'swing');

    return false;
  });


  /* ===============================================
  # ハンバーガー
  =============================================== */
  $(".burger").on("click",function(){

    $(".burger,.open_menu,#header,main,#footer,.privacy").
      toggleClass("is-open");

    if($(".burger--text").text() === "MENU"){
      $(".burger--text").text("CLOSE");
    } else {
      $(".burger--text").text("MENU");
    }
  });

});