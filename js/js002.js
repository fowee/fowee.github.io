function sayHello() {
    //console.log("Hello");

    // 取得 input 的值
    var str = $("#input").val();

    // 將 str 設定到 output 
    $("#output").text(str);
}

// 將 id名為 test 的 button，綁定 click 事件 
$("#test").bind('click', sayHello);