let btn = document.querySelector('.btn');
btn.addEventListener('click', allView)


function allView() {
    var elem = document.getElementById("allViewBtn");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
}


let upright = document.querySelector('.upright')
let horizontal = document.querySelector('.horizontal')

// 判斷手機是否為橫版瀏覽
function hengshuping() {

    if (window.orientation == 180 || window.orientation == 0) {
        upright.classList.remove('hide')
        horizontal.classList.add('hide')

        console.log('直立')
    }
    if (window.orientation == 90 || window.orientation == -90) {
        horizontal.classList.remove('hide')
        upright.classList.add('hide')
        console.log('水平')
    }

}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);


if (window.orientation == 180 || window.orientation == 0) {
    upright.classList.remove('hide')
    horizontal.classList.add('hide')

    console.log('直立')
}
if (window.orientation == 90 || window.orientation == -90) {
    horizontal.classList.remove('hide')
    upright.classList.add('hide')
    console.log('水平')
}



// function isMobile() {
//     try { document.createEvent("TouchEvent"); return true; } catch (e) { return false; }
// }

// if (isMobile()) {
//     console.log('載具')
// } else {
//     console.log('PC')
// }