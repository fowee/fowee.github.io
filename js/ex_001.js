function sayHello ()
{
    console.log('Hello world!');
}

$("#btn1").click(function(){
    var str01 = $("#input").val();
    $("#output").text(str01);
});