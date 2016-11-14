var i =-1;
function Run() {

    console.log('run...');
    i++;
    var svgctrl = d3.select('svg');
    var r1 = svgctrl.append('rect');
    var r2 = svgctrl.append('rect');
    var p1 = svgctrl.append('path');
    var p2 = svgctrl.append('path');
    switch(i%4)
{
case 0:{    r1.attr('x',50).attr('y',5).attr('width',203).attr('height',203).attr('style','fill:white').attr('stroke','black').attr('stroke-width',6);
    break;
}
case 1:{    r2.attr('x',110).attr('y',105).attr('width',80).attr('height',77).attr('style','fill:white').attr('stroke','black').attr('stroke-width',6)
    break;}
case 2:{    p1.attr('d','M 130 30 q -5 40 -60 70').attr('stroke','black').attr('stroke-width',5).attr('fill','none');
    break;}
case 3:{    p2.attr('d','M 170 30 q 5 40 60 70').attr('stroke','black').attr('stroke-width',5).attr('fill','none');
    break;}
}
}

$('#run').bind('click', Run);
// c1.attr('cx',250).attr('cy',100).attr('r',50).attr('stroke','black').attr('stroke-width',3).attr('fill','#ffffff');