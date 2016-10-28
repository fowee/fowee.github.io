function Run() {
    console.log('run...');

    var $img = $('<img>');

    $img.attr('src', './img/p01.jpg');

    $img.attr('class', 'img-thumbnail');

    $img.appendTo('#output');
}

$('#run').bind('click', Run);