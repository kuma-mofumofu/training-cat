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

  

});