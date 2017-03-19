//add deviceorientation event listener
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', DeviceOrientationHandler, false);
    // document.getElementById("doeSupported").innerText = "";
} else {
    alert("您的浏览器不支持DeviceOrientation");
}
function DeviceOrientationHandler(event) {
    var alpha = event.alpha;
    // var alpha = instanceOfDeviceOrientationEvent.alpha
    var beta = event.beta;
    var gamma = event.gamma;
    document.getElementById("alpha").innerHTML = "alpha:"+ event.alpha ;
    document.getElementById("beta").innerHTML = "beta:"+ event.beta ;
    document.getElementById("gamma").innerHTML = "gamma:"+ event.gamma ;
}