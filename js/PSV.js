var i = false;        //show_or_hide 控制变量
var PSV = new PhotoSphereViewer({
    autoload: true,
    panorama: 'text.jpg',
    container: 'photosphere',
    loading_img: 'photosphere-logo.gif',
    navbar: [
        'autorotate', 'zoom', 'markers',
        {
            id: 'zq',
            title: '展区列表',
            className: 'custom-button3',
            content: '主要展区：',
            onClick: function () {
                show_or_hide()
            }
        },
        {
            id: 'dt',
            title: '艺术中心大厅',
            className: 'custom-button2',
            content: '大厅',
            onClick: function () {
                changeToDT();
            }
        },
        {
            id: 'dc',
            title: '经典藏区',
            className: 'custom-button2',
            content: '典藏',
            onClick: function () {
                changeToDC();
            }
        },
        {
            id: 'ez',
            title: '第二展区',
            className: 'custom-button2',
            content: '二展',
            onClick: function () {
                changeToEZ();
            }
        },
        {
            id: 'qb',
            title: '钱币展区',
            className: 'custom-button2',
            content: '钱币',
            onClick: function () {
                changeToQB();
            }
        },
        {
            id: 'fx',
            title: '佛像展区',
            className: 'custom-button2',
            content: '佛像',
            onClick: function () {
                changeToFX();
            }
        },
        {
            id: 'sh',
            title: '书画展区',
            className: 'custom-button2',
            content: '书画',
            onClick: function () {
                changeToSH();
            }
        },

        //   {
        //     title: 'Change image',
        //     className: 'custom-button',
        //     content: '↻',
        //     onClick: (function() {
        //       var i = false;
        //       return function() {
        //         i = !i;
        //         PSV.clearMarkers();
        //         PSV.setPanorama(i ? 'fx001.jpg' : 'fx001.jpg', {
        //           longitude: i ? 3.7153696451829257 : 3.8484510006474992,
        //           latitude: i ? 0.57417649320975916 : -0.24434609527920628
        //         }, true)
        //           .then(function() {
        //             PSV.setCaption(i ? '佛像展示区1 <b>&copy; MCU_电子三庚</b>' : '佛像展示区2 <b>&copy; MCU_电子三庚</b>');
        //           });
        //       }
        //     }())
        //   },

        // 'spacer-1', //空格
        'caption',
        'gyroscope',
        'fullscreen'
    ],
    caption: '欢迎来到艺术中心 <b>&copy; MCU_电子三庚</b>',
    // longitude_range: [-Math.PI / 2,  Math.PI / 2],   //限制显示范围,longitude_range
    // latitude_range:  [-Math.PI / 4,  Math.PI / 4],   //限制显示范围,latitude_range
    anim_speed: '-1.5rpm',
    default_fov: 50,
    fisheye: true,
    move_speed: 0.8,
    time_anim: false,
    gyroscope: true,
    webgl: true,
    transition: {
        duration: 1000,
        loader: true,
        blur: true
    },
    markers: (function () {      //测试markers
        var a = [];
        for (var i = 0; i < Math.PI * 2; i += Math.PI / 4) {
            for (var j = -Math.PI / 2 + Math.PI / 4; j < Math.PI / 2; j += Math.PI / 4) {
                a.push({
                    id: '#' + a.length,
                    tooltip: '#' + a.length,
                    latitude: j,
                    longitude: i,
                    image: 'pin.png',
                    width: 32,
                    height: 32,
                    anchor: 'bottom center',
                    data: {
                        deletable: true
                    }
                });
            }
        }

        a.push({
            id: 'the-path',
            name: 'The path',
            content: '<img src="pin2.png" style="width:100%"/><img src="pin.png" style="width:100%"/>',
            x: 3900,
            y: 1650,
            image: 'pin2.png',
            width: 32,
            height: 32,
            anchor: 'bottom center'
        });

        a.push({
            id: 'lorem',
            tooltip: {
                content: 'Lorem ipsum dolor ist amet et consecturo.',
                position: 'bottom right'
            },
            content: document.getElementById('pin-content').innerHTML,
            latitude: 0,
            longitude: 0.20,
            image: 'pin2.png',
            width: 32,
            height: 32,
            anchor: 'bottom center'
        });

        a.push({
            id: 'gif',
            image: 'http://strangeplanet.fr/files/avatars/sleep-round.gif',
            width: 100,
            height: 100,
            x: 2060,
            y: 960
        });

        a.push({
            id: 'text',
            html: 'This <b>is</b> text <img src="pin3.png" style="height: 24px; vertical-align: top;"/>',
            anchor: 'bottom right',
            style: {
                color: 'white',
                fontSize: '20px',
                fontFamily: 'Helvetica, sans-serif',
                textAlign: 'center'
            },
            latitude: -0.2,
            longitude: 0.5
        });

        a.push({
            id: 'polygon',
            content: 'This mountain is so great it has dots on it!',
            polygon_px: [3184, 794, 3268, 841, 3367, 1194, 3327, 1307, 3065, 1221, 3097, 847],
            svgStyle: {
                fill: 'url(#points)', //'rgba(255,0,0,0.3)',
                stroke: 'rgba(255, 0, 50, 0.8)',
                'stroke-width': '2px'
            },
            tooltip: {
                content: 'This is a mountain',
                position: 'right bottom'
            }
        });

        a.push({
            id: 'polygon-sky',
            svgStyle: {
                fill: 'rgba(0, 190, 255, 0.1)'
            },
            polygon_rad: (function () {
                var points = [];

                for (var i = 0; i < Math.PI * 2; i += Math.PI / 8) {
                    points.push(i);
                    points.push(Math.PI / 8);
                }

                return points;
            } ())
        });

        a.push({
            id: 'circle',
            tooltip: 'A circle of radius 30',
            circle: 30,
            svgStyle: {
                fill: 'rgba(255,255,0,0.3)',
                stroke: 'yellow',
                'stroke-width': '2px'
            },
            longitude: 0,
            latitude: -0.1,
            anchor: 'center right'
        });

        a.push({
            id: 'ellipse',
            tooltip: 'An ellipse of radius 60/30',
            ellipse: [60, 30],
            svgStyle: {
                fill: 'rgba(255,255,0,0.3)',
                stroke: 'yellow',
                'stroke-width': '2px'
            },
            longitude: 0,
            latitude: -0.1,
            anchor: 'center left'
        });

        a.push({
            id: 'rect',
            tooltip: 'A square a side 60',
            rect: [60, 60],
            svgStyle: {
                fill: 'rgba(255,255,0,0.3)',
                stroke: 'yellow',
                'stroke-width': '2px'
            },
            longitude: 0,
            latitude: -0.2,
            anchor: 'center right'
        });

        a.push({
            id: 'path',
            tooltip: 'A custom path',
            path: 'M 0 0 L 60 60 L 60 0 L 0 60 L 0 0',
            svgStyle: {
                fill: 'rgba(255,255,0,0.3)',
                stroke: 'yellow',
                'stroke-width': '2px'
            },
            longitude: 0,
            latitude: -0.2,
            anchor: 'center left'
        });

        return a;
    } ())
});

//自动打开陀螺仪
// GC();
// function GC(){
//  PSV.startGyroscopeControl();
// }



show_or_hide();
PSV.on('click', function (e) {
    if (e.marker && !e.marker.isPolygon()) {
        return;
    }
    // PSV.addMarker({
    //     id: '#' + Math.random(),
    //     tooltip: 'Generated marker',
    //     longitude: e.longitude,
    //     latitude: e.latitude,
    //     image: 'pin.png',
    //     width: 32,
    //     height: 32,
    //     anchor: 'bottom center',
    //     data: {
    //         deletable: true
    //     }
    // });
});

PSV.on('select-marker', function (marker) {
    if (marker.data && marker.data.deletable) {
        PSV.removeMarker(marker);
    }

    //点击point切换场景
    else if (marker.id === 'dt') {
        changeToDT();
    }
    else if (marker.id === 'dc') {
        changeToDC();
    }
    else if (marker.id === 'ez') {
        changeToEZ();
    }
    else if (marker.id === 'qb') {
        changeToQB();
    }
    else if (marker.id === 'fx') {
        changeToFX();
    }
    else if (marker.id === 'sh') {
        changeToSH();
    }
});

//show or hide 展区列表，默认不显示
function show_or_hide() {
    if (i === true) {
        PSV.getNavbarButton('dt').show();
        PSV.getNavbarButton('dc').show();
        PSV.getNavbarButton('ez').show();
        PSV.getNavbarButton('qb').show();
        PSV.getNavbarButton('fx').show();
        PSV.getNavbarButton('sh').show();
    }
    else if (i === false) {
        PSV.getNavbarButton('dt').hide();
        PSV.getNavbarButton('dc').hide();
        PSV.getNavbarButton('ez').hide();
        PSV.getNavbarButton('qb').hide();
        PSV.getNavbarButton('fx').hide();
        PSV.getNavbarButton('sh').hide();
    }
    i = !i;
}

//全景图切换函数
//大厅
function changeToDT() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/dt.jpg', {
        longitude: Math.PI,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('大厅 <b>&copy; MCU_电子三庚</b>');
            PSV.getNavbarButton('dt').disable();
            PSV.getNavbarButton('dc').enable();
            PSV.getNavbarButton('ez').enable();
            PSV.getNavbarButton('qb').enable();
            PSV.getNavbarButton('fx').enable();
            PSV.getNavbarButton('sh').enable();
            PSV.addMarker({
                id: 'ez',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 5 * Math.PI / 4
            });
        });
}

//典藏
function changeToDC() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/dc.jpg', {
        longitude: 0,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('典藏 <b>&copy; MCU_电子三庚</b>');
            PSV.getNavbarButton('dc').disable();
            PSV.getNavbarButton('dt').enable();
            PSV.getNavbarButton('ez').enable();
            PSV.getNavbarButton('qb').enable();
            PSV.getNavbarButton('fx').enable();
            PSV.getNavbarButton('sh').enable();
        });
}

//二展
function changeToEZ() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/ez.jpg', {
        longitude: 0,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('二展 <b>&copy; MCU_电子三庚</b>');
            PSV.getNavbarButton('ez').disable();
            PSV.getNavbarButton('dt').enable();
            PSV.getNavbarButton('dc').enable();
            PSV.getNavbarButton('qb').enable();
            PSV.getNavbarButton('fx').enable();
            PSV.getNavbarButton('sh').enable();
        });
}

//钱币
function changeToQB() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/qb.jpg', {
        longitude: 0,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('钱币 <b>&copy; MCU_电子三庚</b>');
            PSV.getNavbarButton('qb').disable();
            PSV.getNavbarButton('dt').enable();
            PSV.getNavbarButton('dc').enable();
            PSV.getNavbarButton('ez').enable();
            PSV.getNavbarButton('fx').enable();
            PSV.getNavbarButton('sh').enable();
        });
}

//佛像
function changeToFX() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/fx.jpg', {
        longitude: 0,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('佛像 <b>&copy; MCU_电子三庚</b>');
            PSV.getNavbarButton('fx').disable();
            PSV.getNavbarButton('dt').enable();
            PSV.getNavbarButton('dc').enable();
            PSV.getNavbarButton('ez').enable();
            PSV.getNavbarButton('qb').enable();
            PSV.getNavbarButton('sh').enable();
        });
}

//书画
function changeToSH() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/sh.jpg', {
        longitude: 0,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('书画 <b>&copy; MCU_电子三庚</b>');
            PSV.getNavbarButton('sh').disable();
            PSV.getNavbarButton('dt').enable();
            PSV.getNavbarButton('dc').enable();
            PSV.getNavbarButton('ez').enable();
            PSV.getNavbarButton('qb').enable();
            PSV.getNavbarButton('fx').enable();
        });
}