$(function () {
  // ボタンをマウスオーバー
  $('.button-more').on('mouseover', function () {
    // 左側の余白20px, 透明度を0.5に設定する
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });

  $('.button-more').on('mouseout', function () {
    // 左側余白ゼロ、透明度を１にする
    $(this).animate({
      opacity: 1,
      marginLeft: 0
    }, 100);
  });
});