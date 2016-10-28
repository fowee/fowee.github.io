// 新增牌背影像
function addPokerBackImg(index) {
    // 產生一個 div
    var $div = $('<div>');
    $div.css('position', 'relative');
    $div.css('display', 'inline-block');
    
    
    // 產生一張圖片
    var $img = $('<img>');

    // 設定 src 屬性
    $img.attr('src', './img/pokers/back.png');
    // 設定 class 樣式
    $img.attr('class', 'img-thumbnail');

    // 記錄 img 的編號
    $img.attr('data-index', index);

    // 將 $img 插入至 $div
    $img.appendTo($div);

    // 將 $div 插入至 id=output 內
    $div.appendTo('#output');


    // 將 img 的 click 事件綁定
    $img.bind('click', function() {
        // 取出 data-index 的屬性
        var index = $(this).attr('data-index');
        console.log('按到第' + index + '張');

        $(this).attr('src', './img/pokers/pic' + index + '.png');

        //$(this).animate({ "top": "+=50px" }, "slow");
    });

    $div.bind('click', function() {

        $(this).animate({ "top": "+=50px" }, "slow");
    })

}

function Run() {
    console.log('run...');

    $('img').remove();



    for (var i = 0; i < 5; i++) {
        var r = Math.floor(Math.random() * 52) + 1;
        addPokerBackImg(r);
    }

}

$('#run').bind('click', Run);