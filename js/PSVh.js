var i = false;        //show_or_hide 控制变量
var isPhone = false;
//检测平台,若是android & ios访问就开启陀螺仪
function checkClinetModel() {
    //ask for userAgent
    var u = navigator.userAgent;
    //is android
    var isAndroid = u.indexOf('Android') > -1;
    //is ios?
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
        'caption',
        'gyroscope',
        'fullscreen'
    ],
    caption: '欢迎来到艺术中心 <b>&copy; MCU_电子三庚</b>',
    longitude_range: [-Math.PI / 2,  Math.PI / 2],   //限制显示范围,longitude_range
    latitude_range:  [-Math.PI / 4,  Math.PI / 4],   //限制显示范围,latitude_range
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
            latitude: -Math.PI / 16,
            longitude: 0
        });
        return a;
    } ())
});

show_or_hide();
PSV.on('click', function (e) {
    if (e.marker && !e.marker.isPolygon()) {
        return;
    }

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
    PSV.setPanorama('./panorama/pic-high/dt.jpg', {
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
            if (isPhone) PSV.startGyroscopeControl();
        });
}

//典藏
function changeToDC() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/pic-high/dc.jpg', {
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
            if (isPhone) PSV.startGyroscopeControl();
        });
}

//二展
function changeToEZ() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/pic-high/ez.jpg', {
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
            if (isPhone) PSV.startGyroscopeControl();
        });
}

//钱币
function changeToQB() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/pic-high/qb.jpg', {
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
            if (isPhone) PSV.startGyroscopeControl();
        });
}

//佛像
function changeToFX() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/pic-high/fx.jpg', {
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
            if (isPhone) PSV.startGyroscopeControl();
        });
}

//书画
function changeToSH() {
    PSV.clearMarkers();
    PSV.setPanorama('./panorama/pic-high/sh.jpg', {
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
            if (isPhone) PSV.startGyroscopeControl();
        });
}