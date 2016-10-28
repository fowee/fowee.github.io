function showImg(index) {
    
    // var img = $('img')[index];
    var $img= $('img:eq('+index+')');
    if ($img.is(':visible')) {
        $img.hide();
    } else {
        $img.show();
    }
}


function Run() {
    console.log('run...');

    var index = $('#image_idx').val();

    showImg(index);

}

$('#run').bind('click', Run);