let header=$('.header');
let item = $('.menu-item');
let sub = $('.sub-menu a');
let subject=$('.board-list a');
let board=$('.notice, .pds');
let tab=$('.tab');

item.attr('tabindex','0');
sub.addClass('icon-dot-circled');
subject.addClass('icon-dot-circled');


header.on('mouseout', function(){
  item.removeClass('menu-act');
});

item.on('mouseover focusin', function(){
  item.removeClass('menu-act');
  $(this).addClass('menu-act');
});

sub.on('mouseover focusin', function(){
  $(this).removeClass('icon-dot-circled').addClass('icon-ok');
});

sub.on('mouseout focusout', function(){
  $(this).removeClass('icon-ok').addClass('icon-dot-circled');
});

tab.on('click keyup', function(e){
  if(e.type==='click'|| e.keyCode ===13){
    board.removeClass('board-act');
    $(this).parent().addClass('board-act');
  }

});


// 마우스랑 키보드로 도 가능한 형태로 만들어줌.