$(function () {

  /* ===============================================
  # 「おすすめ商品」の商品説明の文字数制限
  =============================================== */
  const limit = document.querySelector(".txt-limit");
  const str = limit.textContent;
  const len = 60; // 半角60字（全角約30字）

  if (str.length > len) {
    limit.textContent = str.substring(0, len) + "…";
  }


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