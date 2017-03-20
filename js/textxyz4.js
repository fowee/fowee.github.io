// HTML5的DeviceOrientation API 可实时获取屏幕的旋转方向。

// alpha  设备绕z轴旋转的角度。 （指南针的应用只要拿到alpha就OK啦）
// beta   设备绕x轴旋转的角度
// gamma  设备绕y轴旋转的角度
// webkitCompassHeading: 与正北方向的角度差值。正北为0度，正东为90度，正南为180度，正西为270度。因为0度是正北，所以叫指北针，不是指南针。
// webkitCompassAccuracy：指北针的精确度，表示偏差为正负多少度。一般是10。

//检查手机是否支持
 if(window.DeviceOrientationEvent){
    window.addEventListener('deviceorientation',DeviceOrientationHandler,false);
}else{
    alert("您的浏览器不支持DeviceOrientation");
}
//事件处理逻辑
function DeviceOrientationHandler(event){
      document.getElementById("alpha").innerHTML = event.alpha;
      document.getElementById("beta").innerHTML = event.beta;
      document.getElementById("gamma").innerHTML = event.gamma;
      document.getElementById("heading").innerHTML = event.webkitCompassHeading;
      document.getElementById("accuracy").innerHTML = event.webkitCompassAccuracy;
}