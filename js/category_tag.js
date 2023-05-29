  /* ===============================================
  # カテゴリータグ（商品一覧ページ）
  =============================================== */
$(function () {

  $('.tag_list').on("click", function(){

    if($(this).hasClass("is-open") === false ){

      $('.tag_list').removeClass("is-open");
      $(this).addClass("is-open");

    } else {

      $(this).addClass("is-open");

    }


    // $(this).toggleClass("is-open");
  });


});