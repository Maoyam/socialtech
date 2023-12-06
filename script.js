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

// カルーセルの設定
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // AjaxでSTATIC FORMにデータを送信
  $('#submit').on('click', function (event) {
    // formタグによる送信を拒否
    event.preventDefault();

    // 入力チェックをした結果、エラーがあるかないか判定
    let result = inputCheck();
  });

  // フォーカスが外れた時(blur)にフォームの入力チェックをする
  $('#name').blur(function () {
    inputCheck();
  });
  $('#furigana').blur(function () {
    inputCheck();
  });
  $('#email').blur(function () {
    inputCheck();
  });
  $('#tel').blur(function () {
    inputCheck();
  });
  $('#message').blur(function () {
    inputCheck();
  });
  $('#agree').blur(function () {
    inputCheck();
  });  

  // お問い合わせフォームの入力チェック
  function inputCheck() {
    console.log('inputoCheck関数の呼び出し');
  }
});