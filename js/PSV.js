var i = false;        //show_or_hide 控制变量
var isPhone = false;
//检测平台,若是android & ios访问就开启陀螺仪
function checkClinetModel() {
    //获取请求头中的userAgent
    var u = navigator.userAgent;
    //是否是android浏览器
    var isAndroid = u.indexOf('Android') > -1;
    //是否是ios浏览器
    var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var msg = '';
    if (isAndroid) {
        isPhone = true;   //android         
        console.log('android');
    } else if (isIos) {
        isPhone = true;   //ios   
        console.log('ios');
    } else {
        isPhone = false;  //PC
        console.log('PC');
    };
};
checkClinetModel();
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
            title: '书法展区',
            className: 'custom-button2',
            content: '书法',
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
        'caption', 'gyroscope', 'fullscreen'
    ],
    caption: '欢迎来到艺术中心 <b>&copy; MCU_电子三庚</b>',
    longitude_range: [-Math.PI / 2, Math.PI / 2],   //限制显示范围,longitude_range
    latitude_range: [-Math.PI / 4, Math.PI / 4],   //限制显示范围,latitude_range
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
        a.push({
            id: 'dt',
            image: 'point.png',
            width: 64,
            height: 64,
            latitude: -5 * Math.PI / 32,
            longitude: 0
        });
        return a;
    }())
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
    else if (marker.id === 'zl0') {
        changeToZL0();
    }
    else if (marker.id === 'zl1') {
        changeToZL1();
    }
    else if (marker.id === 'dc0') {
        changeToDC0();
    }
    else if (marker.id === 'ez0') {
        changeToEZ0();
    }
    else if (marker.id === 'ez2') {
        changeToEZ2();
    }
    else if (marker.id === 'sh2') {
        changeToSH2();
    }
    else if (marker.id === 'sh3') {
        changeToSH3();
    }
});
//show or hide 展区列表，
show_or_hide(); //默认不显示
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
        longitude: -3 * Math.PI / 16,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('大厅 <b>&copy; MCU_电子三庚</b>');
            PSV.addMarker({
                id: 'zl0',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 1 * Math.PI / 16
            });
            if (isPhone) PSV.startGyroscopeControl();
        });
}
//典藏
function changeToDC() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/dc.jpg', {
        longitude: -5 * Math.PI / 16,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('典藏 <b>&copy; MCU_电子三庚</b>');
            PSV.addMarker({
                id: 'dc0',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: - Math.PI / 16,
                longitude: 11 * Math.PI / 16
            });
            if (isPhone) PSV.startGyroscopeControl();
        });
}
function changeToDC0() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/dc0.jpg', {
        longitude: -5 * Math.PI / 16,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('典藏 <b>&copy; MCU_电子三庚</b>');
            PSV.addMarker({
                id: 'zl1',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: - Math.PI / 16,
                longitude: 11 * Math.PI / 16
            });
            PSV.addMarker({
                id: 'dc',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: - Math.PI / 16,
                longitude: -5 * Math.PI / 16
            });
            if (isPhone) PSV.startGyroscopeControl();
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
            PSV.addMarker({
                id: 'zl0',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: -9 * Math.PI / 16
            });
            PSV.addMarker({
                id: 'ez2',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: -25 * Math.PI / 32
            });
            PSV.addMarker({
                id: 'ez0',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 3 * Math.PI / 16
            });
            if (isPhone) PSV.startGyroscopeControl();
        });
}
function changeToEZ0() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/ez0.jpg', {
        latitude: 0,
        longitude: 11 * Math.PI / 16
    }, true)
        .then(function () {
            PSV.setCaption('二展 <b>&copy; MCU_电子三庚</b>');
            PSV.addMarker({
                id: 'ez',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: -13 * Math.PI / 16
            });
            PSV.addMarker({
                id: 'sh3',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 7 * Math.PI / 16
            });
            if (isPhone) PSV.startGyroscopeControl();
        });
}
function changeToEZ2() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/ez2.jpg', {
        longitude: 0,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('二展 <b>&copy; MCU_电子三庚</b>');
            PSV.addMarker({
                id: 'ez',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 4 * Math.PI / 16
            });
            if (isPhone) PSV.startGyroscopeControl();
        });
}
//书法（代替原钱币）
function changeToQB() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/qb.jpg', {
        longitude: 11 * Math.PI / 16,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('书法 <b>&copy; MCU_电子三庚</b>');
            PSV.addMarker({
                id: 'sh3',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 9 * Math.PI / 32
            });
            if (isPhone) PSV.startGyroscopeControl();
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
            PSV.addMarker({
                id: 'zl1',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 18 * Math.PI / 16
            });
            PSV.addMarker({
                id: 'fx_001',
                name: 'The path',
                content: '<iframe src="../zp/cfx_001.html" style="height:100%;width:100%">',
                latitude: -3 * Math.PI / 32,
                longitude: 23 * Math.PI / 64,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '观音菩萨雕像',
                    position: 'bottom right'
                }
            });
            PSV.addMarker({
                id: 'fx_002',
                name: 'The path',
                content: '<iframe src="../zp/cfx_002.html" style="height:100%;width:100%">',
                latitude: -5 * Math.PI / 64,
                longitude: 23 * Math.PI / 128,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '千手观音铜像',
                    position: 'bottom right'
                }
            });
            PSV.addMarker({
                id: 'fx_003',
                name: 'The path',
                content: '<iframe src="../zp/cfx_003.html" style="height:100%;width:100%">',
                latitude: -8 * Math.PI / 64,
                longitude: 87 * Math.PI / 128,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '观音雕像',
                    position: 'bottom right'
                }
            });
            PSV.addMarker({
                id: 'fx_004',
                name: 'The path',
                content: '<iframe src="../zp/cfx_004.html" style="height:100%;width:100%">',
                latitude: -5 * Math.PI / 64,
                longitude: 12 * Math.PI / 128,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '佛陀头像',
                    position: 'bottom right'
                }
            });
            PSV.addMarker({
                id: 'fx_010',
                name: 'The path',
                content: '<iframe src="../zp/cfx_010.html" style="height:100%;width:100%">',
                latitude: -7 * Math.PI / 64,
                longitude: -23 * Math.PI / 128,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '思惟菩萨',
                    position: 'bottom right'
                }
            });
            PSV.addMarker({
                id: 'fx_011',
                name: 'The path',
                content: '<iframe src="../zp/cfx_011.html" style="height:100%;width:100%">',
                latitude: -11 * Math.PI / 128,
                longitude: 120 * Math.PI / 128,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '观音菩萨',
                    position: 'bottom right'
                }
            });
            PSV.addMarker({
                id: 'fx_012',
                name: 'The path',
                content: '<iframe src="../zp/cfx_012.html" style="height:100%;width:100%">',
                latitude: -6 * Math.PI / 64,
                longitude: -8 * Math.PI / 128,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '双佛立像',
                    position: 'bottom right'
                }
            });
            PSV.addMarker({
                id: 'fx_013',
                name: 'The path',
                content: '<iframe src="../zp/cfx_013.html" style="height:100%;width:100%">',
                latitude: -11 * Math.PI / 128,
                longitude: 1 * Math.PI / 128,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '观音菩萨',
                    position: 'bottom right'
                }
            });
            PSV.addMarker({
                id: 'fx_014',
                name: 'The path',
                content: '<iframe src="../zp/cfx_014.html" style="height:100%;width:100%">',
                latitude: -7 * Math.PI / 64,
                longitude: -53 * Math.PI / 128,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '佛头',
                    position: 'bottom right'
                }
            });
            if (isPhone) PSV.startGyroscopeControl();
        });
}

//书画
function changeToSH() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/sh.jpg', {
        longitude: 11 * Math.PI / 16,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('书画 <b>&copy; MCU_电子三庚</b>');
            PSV.addMarker({
                id: 'sh2',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: -9 * Math.PI / 16
            });
            PSV.addMarker({
                id: 'sh_001',
                name: 'The path',
                // content: document.getElementById('sh_001').innerHTML,  
                content: '<iframe src="../zp/csh_001.html" style="height:100%;width:100%">',
                latitude: 2 * Math.PI / 16,
                longitude: 27 * Math.PI / 32,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '乾隆皇帝造像',
                    position: 'bottom right'
                }
            });
            PSV.addMarker({
                id: 'sh_002',
                name: 'The path',
                // content: document.getElementById('sh_001').innerHTML,  
                content: '<iframe src="../zp/csh_002.html" style="height:100%;width:100%">',
                latitude: 2 * Math.PI / 16,
                longitude: 34 * Math.PI / 32,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '福寿',
                    position: 'bottom right'
                }
            });
            PSV.addMarker({
                id: 'sh_003',
                name: 'The path',
                // content: document.getElementById('sh_001').innerHTML,  
                content: '<iframe src="../zp/csh_003.html" style="height:100%;width:100%">',
                latitude: 1 * Math.PI / 16,
                longitude: 41 * Math.PI / 32,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '高行清粹',
                    position: 'bottom right'
                }
            });
            PSV.addMarker({
                id: 'sh_004',
                name: 'The path',
                // content: document.getElementById('sh_001').innerHTML,  
                content: '<iframe src="../zp/csh_004.html" style="height:100%;width:100%">',
                latitude: 2 * Math.PI / 16,
                longitude: 16 * Math.PI / 32,
                image: 'pin2.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: {
                    content: '状元及弟',
                    position: 'bottom right'
                }
            });
            if (isPhone) PSV.startGyroscopeControl();
        });
}
function changeToSH2() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/sh2.jpg', {
        longitude: 6 * Math.PI / 16,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('书画 <b>&copy; MCU_电子三庚</b>');
            PSV.addMarker({
                id: 'sh',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 5 * Math.PI / 16
            });
            PSV.addMarker({
                id: 'sh3',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 21 * Math.PI / 16
            });
            if (isPhone) PSV.startGyroscopeControl();
        });
}
function changeToSH3() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/sh3.jpg', {
        longitude: 0,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('书画 <b>&copy; MCU_电子三庚</b>');
            PSV.addMarker({
                id: 'qb',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 19 * Math.PI / 16
            });
            PSV.addMarker({
                id: 'sh2',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 7 * Math.PI / 32
            });
            PSV.addMarker({
                id: 'ez0',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: -5 * Math.PI / 16
            });
            if (isPhone) PSV.startGyroscopeControl();
        });
}
//走廊
function changeToZL0() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/zl0.jpg', {
        latitude: -Math.PI / 16,
        longitude: 4 * Math.PI / 16
    }, true)
        .then(function () {
            PSV.setCaption('走廊 <b>&copy; MCU_电子三庚</b>');
            PSV.addMarker({
                id: 'zl1',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 4 * Math.PI / 16
            });
            PSV.addMarker({
                id: 'dt',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 20 * Math.PI / 16
            });
            PSV.addMarker({
                id: 'ez',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 7 * Math.PI / 16
            });
            if (isPhone) PSV.startGyroscopeControl();
        });
}
function changeToZL1() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/zl1.jpg', {
        longitude: 0,
        latitude: 0
    }, true)
        .then(function () {
            PSV.setCaption('走廊 <b>&copy; MCU_电子三庚</b>');
            PSV.addMarker({
                id: 'zl0',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 19 * Math.PI / 16
            });
            PSV.addMarker({
                id: 'dc0',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 0
            });
            PSV.addMarker({
                id: 'fx',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -Math.PI / 16,
                longitude: 2 * Math.PI / 16
            });
            PSV.addMarker({
                id: 'ez',
                image: 'point.png',
                width: 64,
                height: 64,
                latitude: -2 * Math.PI / 16,
                longitude: 17 * Math.PI / 16
            });
            if (isPhone) PSV.startGyroscopeControl();
        });
}