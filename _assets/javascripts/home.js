//= require vendor/jquery.min
//= require plugins/jquery.typed.min

$(document).ready(function(){

  $("body").addClass("js");

  // toggle overlay navigation
  $('.overlay__menu-trigger').on('click', function(){
    // in Firefox transitions break when parent overflow is changed, so we need to wait for the end of the transition to give the body an overflow hidden
    if( $('.overlay__menu').hasClass('is--visible') ) {
      $('.overlay__menu').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
      $('#screen').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    }
    else {
      $('.overlay__menu').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
      $('#screen').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    }
  });

  // close overlay navigation on button click
  $('.overlay__menu-close, #screen').on('click', function(){
    $('.overlay__menu').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    $('#screen').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
  });

  // open/close overlay navigation on focus
  $('.overlay__menu-item a').on('focus', function(){
    $('.overlay__menu').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    $('#screen').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
  });
  $('.overlay__menu-close').on('focus', function(){
    $('.overlay__menu').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    $('#screen').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
  });

  // auto typing

  $("#js-home-typed").typed({
    strings: ["<span class='home__title'>Hello^250 my name is&nbsp;M̔̋ͩ̚i̋͢c̛ͪ̈́́̄hͪ̄̆́a̢͋͂ͧē̎̌̿ͣl͋ͬ̽͆͌ͧ̿̕. ^500</span> <span class='br'></span> I am just another boring, ^250 tattooed, ^250 time traveling designer from Buffalo New York.^500 <span class='br'></span> I enjoy eating chicken wings, ^500 <a href='https://mademistakes.com/paperfaces/'>sketching on an iPad</a>, ^500 and playing Xbox.^500 <span class='br'></span> Here you will find a collection of <a href='https://mademistakes.com/articles/'>my writing</a>, ^750 <a href='https://mademistakes.com/mastering-paper/'>Paper by FiftyThree tutorials</a>, ^750 and other <a href='https://mademistakes.com/work/'>creative endeavors</a>. ^250"],
    contentType: "html",
    startDelay: 200,
    backDelay: 3000,
    callback: function(){
      home_secondary();
    }
  });

  function home_secondary(){
    $(".home__secondary").css("opacity", "1");
  }

});
