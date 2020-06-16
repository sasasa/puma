$(document).ready(function(){
  var video = null;
  var is_play = false;
  if(window.outerWidth > 1200) {
    video = $('#video01').get(0);
  } else {
    video = $('#video02').get(0);
  }
  $('#stop').hide();
  // 動画の再生
  $('#play').click(function(){
    is_play = true;
    video.play();
    $(this).hide();
    $('#stop').show();
  });
  // 動画の一時停止
  $('#stop').click(function(){
    is_play = false;
    video.pause();
    $(this).hide();
    $('#play').show();
  });

  $(window).resize(function(){
    is_play = false;
    video.pause();
    $('#stop').hide();
    $('#play').show();
    if(window.outerWidth > 1200) {
      video = $('#video01').get(0);
    } else {
      video = $('#video02').get(0);
    }
  })
  $(video).click(function(){
    if (is_play) {
      is_play = false;
      video.pause();
      $('#stop').hide();
      $('#play').show();
    } else {
      is_play = true;
      video.play();
      $('#play').hide();
      $('#stop').show();
    }
  });


  $("h4.close").click(function() {
    $(this).toggleClass('close');
    $(this).toggleClass('open');
  });

  $('.sticky li').hover(function() {
    $(".flex_box").css('display', 'flex');
    $(".flex_box").show();
  }, function() {
    $(".flex_box").hide();
  });

  $(".flex_box").hover(function(){
    $(".flex_box").css('display', 'flex');
    $(".flex_box").show();
  }, function() {
    $(".flex_box").hide();
  });


  let mySwiper = new Swiper('.swiper-container', {
    // loop: true, //最後に達したら先頭に戻る
    //ナビゲーションボタン（矢印）表示の設定
    navigation: {
      nextEl: '.swiper-button-next', //「次へボタン」要素の指定
      prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
    },
    // レスポンシブブレーポイント（画面幅による設定）
    breakpoints: {
      // 画面幅が 640px 以上の場合（window width >= 640px）
      680: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      // 画面幅が 980px 以上の場合（window width >= 980px）
      920: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    },
  });


  let mySwiper2 = new Swiper('.swiper', {
    // loop: true, //最後に達したら先頭に戻る
    //ナビゲーションボタン（矢印）表示の設定
    navigation: {
      nextEl: '.swiper-button-next', //「次へボタン」要素の指定
      prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
    },
    // レスポンシブブレーポイント（画面幅による設定）
    breakpoints: {
      // 画面幅が 640px 以上の場合（window width >= 640px）
      680: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      // 画面幅が 980px 以上の場合（window width >= 980px）
      920: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    },
  });
});