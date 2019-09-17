console.log('Hello')

$(window).on('load scroll', function(){

    //animatedのclassを持った要素をセレクタに指定
    const elem = $('.animated');
    // console.log(elem, 'elem')
  
    elem.each(function () {

        //data属性からアニメーション名を取得
        // const isAnimate = $(this).data('animate');
        // console.log(isAnimate); // => bounce
        //animated要素に位置を取得
        const elemOffset = Math.round($(this).offset().top);
        // console.log(elemOffset, 'elemOffset');
        //現在のスクロールポジションを取得
        const scrollPos = Math.round($(window).scrollTop());
        // console.log(scrollPos, 'scrollPos')
        //ウィンドウの高さを取得
        const wh = $(window).height();
        // console.log(wh, 'wh')

        // while elem is in the window, keep showing
        if(scrollPos > elemOffset - wh){
            $(this).addClass('showUp');
            $(this).removeClass('showOff');
        } 
        // when elem is top of window, elem off
        if(scrollPos > elemOffset + 75) {
            $(this).addClass('showOff');
            $(this).removeClass('showUp');
        }
        // keep hiding elem until elem comes into window 
        if(scrollPos < elemOffset - wh + 75) {
            $(this).removeClass('showUp');
            $(this).addClass('showOff');
        }
    });
});

const $neon2Text = $('.neon2-text');

$neon2Text.on('click', () => {
    console.log('clicked')
    if($neon2Text.hasClass('light-on')) {
        $neon2Text.removeClass('light-on')
    } else {
        $neon2Text.addClass('light-on')
    }
})

const $bulb = $('.bulb');

$bulb.on('click', () => {
    console.log('clicked')
    if($bulb.hasClass('bulb-on')) {
        $bulb.removeClass('bulb-on')
    } else {
        $bulb.addClass('bulb-on')
    }
})




const p = $('.p') 
// console.log(p.offset().top)

// const element = $('#element');
var element = document.getElementById("element");
var nav4 = document.getElementById("nav-4");
nav4.addEventListener('click', () => {
    console.log('p is clicked')
    element.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"
    });
})
const main = document.querySelector('main');
const header = document.querySelector('header');
var nav1 = document.getElementById("nav-1");
nav1.addEventListener('click', () => {
    console.log('sfds')
    header.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
        inline: "nearest"
    });
})