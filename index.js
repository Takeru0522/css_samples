console.log('Hello')

$(window).on('load scroll', function(){

    //animatedのclassを持った要素をセレクタに指定
    const elem = $('.animated');
    console.log(elem, 'elem')
  
    elem.each(function () {

        //data属性からアニメーション名を取得
        // const isAnimate = $(this).data('animate');
        // console.log(isAnimate); // => bounce
        //animated要素に位置を取得
        const elemOffset = Math.round($(this).offset().top);
        console.log(elemOffset, 'elemOffset');
        //現在のスクロールポジションを取得
        const scrollPos = Math.round($(window).scrollTop());
        console.log(scrollPos, 'scrollPos')
        //ウィンドウの高さを取得
        const wh = $(window).height();
        console.log(wh, 'wh')

        // while elem is in the window, keep showing
        if(scrollPos > elemOffset - wh){
            $(this).addClass('showUp');
            $(this).removeClass('showOff');
            console.log('if 1')
        } 
        // when elem is top of window, elem off
        if(scrollPos > elemOffset + 75) {
            console.log('scrollPos === elemOffset')
            $(this).addClass('showOff');
            $(this).removeClass('showUp');
        }
        // keep hiding elem until elem comes into window 
        if(scrollPos < elemOffset - wh + 75) {
            console.log("here");
            $(this).removeClass('showUp');
            $(this).addClass('showOff');
        }
    });
});


const p = $('.p') 
console.log(p.offset().top)