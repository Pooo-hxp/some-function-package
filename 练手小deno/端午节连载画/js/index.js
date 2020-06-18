var Huadong_width = 0.078, Huadong_height = 0.7;
//第一页滑动提示文字；
var G1_width = 0.413, G1_height = 0.28;
var G2_width = 0.359, G2_height = 0.8;
var G_width = 0.4180, G_height = 0.3580;
//第二页两个光圈；
var X1_width = 0.8328, X1_height = 0.1095;
var X2_width = 0.6796, X2_height = 0.2000;
var X3_width = 0.9140, X3_height = 0.2385;
var X4_width = 0.7600, X4_height = 0.2640;
var X5_width = 0.925, X5_height = 0.2900;
var X6_width = 0.632, X6_height = 0.3200;
//第三页星星；
var G3_width = 1, G3_height = 0.47;
//第四页太阳光；
let i = 0;
//第五页定义；
var F1_width = 0.6250, F1_height = 0.35;
//第六页飞机；
var T1_width = 0.6500, T1_height = 0.48;
//第七页头像；
var F2_width = 0.7250, F2_height = 0.9;
//第八页飞机；
var shuaxin_width = 0.5, shuaxin_height = 0.97;
//刷新按钮；
var change_width = 0, change_height = 0;
window.onload = function () {
    let oDiv = document.getElementById("D5");
    let aDiv = oDiv.getElementsByTagName("div");
    GPS1();
    GPS2();
    GPS3();
    GPS4();
    GPS6();
    GPS7();
    GPS8();
    setInterval(() => show(aDiv), 200);
};
window.onresize = function () {
    GPS1();
    GPS2();
    GPS3();
    GPS4();
    GPS6();
    GPS7();
    GPS8();
};

//页面滚动事件监听
var flag = 0;
function zhuScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let audio_1 = document.getElementById("audio_1");
    let audio_2 = document.getElementById("audio_2");
    let audio_3 = document.getElementById("audio_3");
    let audio_4 = document.getElementById("audio_4");
    let audio_5 = document.getElementById("audio_5");
    let audio_6 = document.getElementById("audio_6");
    let audio_7 = document.getElementById("audio_7");
    if (scrollTop >= 0 && scrollTop <= 599) {
        //暂停1.mp3
        audio_1.pause();
    } else if (scrollTop >= 600 && scrollTop <= 1199) {//bgm1；
        //播放1.mp3
        audio_1.play();
        //暂停2.mp3
        audio_2.pause();
        //隐藏div
        var div = document.getElementById("Huadong");
        div.style.display = "none";
    } else if (scrollTop >= 1200 && scrollTop <= 1849) {//bgm2；
        //暂停1.mp3
        audio_1.pause();
        //播放2.mp3
        audio_2.play();
        //暂停3.mp3
        audio_3.pause();
    } else if (scrollTop >= 1850 && scrollTop <= 2549) {//bgm3；
        //暂停2.mp3
        audio_2.pause();
        //播放3.mp3
        audio_3.play();
        //暂停4_5.mp3
        audio_4.pause();
        audio_5.pause();
    } else if (scrollTop >= 2550 && scrollTop <= 4049) {//bgm4_5；
        //暂停3.mp3
        audio_3.pause();
        //播放4_5.mp3
        audio_4.play();
        audio_5.play();
        //暂停6.mp3
        audio_6.pause();
    } else if (scrollTop >= 4050 && scrollTop <= 4849) {//bgm6；
        //暂停4_5.mp3
        audio_4.pause();
        audio_5.pause();
        //播放6.mp3
        audio_6.play();
    } else if (scrollTop >= 4850 && scrollTop <= 5649) {//文字动画；
        //暂停6.mp3
        audio_6.pause();
        //文字
        document.getElementById("D6_1").style.animationPlayState = "running";
    } else if (scrollTop >= 5650 && scrollTop <= 6000) {//bgm7和飞机动画；(——————bug——————)
        //播放7.mp3
        if (flag == 0) {
            audio_7.play();
            flag = 1;
        }
        //飞机1
        document.querySelector("#D6_2>img").style.animationPlayState = "running";
    } else if (scrollTop >= 7550 && scrollTop <= 8000) {//头像回忆；
        //回忆
        document.querySelector("#D7_1>img").style.animationPlayState = "running";
    } else if (scrollTop >= 9100 && scrollTop <= 9500) {//结尾飞机；
        //飞机2
        document.querySelector("#D8_1>img").style.animationPlayState = "running";
        //刷新
        document.querySelector("#shuaxin>img").style.animationPlayState = "running";
    }
    //打印滚动条高度；
    //console.log("滚动高度："+document.documentElement.scrollTop+":"+document.documentElement.scrollHeight);
}

//铃铛音乐；
function yinyue() {
    let audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

//刷新页面；
function shuaxin() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    location.reload();
}

function GPS1() {
    var D1 = document.getElementById("D1");
    var Huadong = document.getElementById("Huadong");
    change_width = Huadong_width * D1.clientWidth;
    change_height = Huadong_height * D1.clientHeight;
    Huadong.style.left = change_width - Huadong.offsetWidth / 2 + "px";
    Huadong.style.top = change_height - Huadong.offsetHeight / 2 + "px";
}
function GPS2() {
    var D2 = document.getElementById("D2");
    var D2_1 = document.getElementById("D2_1");
    function gps2() {
        change_width = G1_width * D2.clientWidth;
        change_height = G1_height * D2.clientHeight;
        D2_1.style.left = change_width - D2_1.offsetWidth / 2 + "px";
        D2_1.style.top = change_height - D2_1.offsetHeight / 2 + "px";
    }
    change_width = G1_width * D2.clientWidth;
    change_height = G1_height * D2.clientHeight;
    D2_1.style.left = change_width - D2_1.offsetWidth / 2 + "px";
    D2_1.style.top = change_height - D2_1.offsetHeight / 2 + "px";

    var D2_2 = document.getElementById("D2_2");
    change_width = G2_width * D2.clientWidth;
    change_height = G2_height * D2.clientHeight;
    D2_2.style.left = change_width - D2_2.offsetWidth / 2 + "px";
    D2_2.style.top = change_height - D2_2.offsetHeight / 2 + "px";

    var D2_3 = document.getElementById("D2_3");
    change_width = G_width * D2.clientWidth;
    change_height = G_height * D2.clientHeight;
    D2_3.style.left = change_width - D2_3.offsetWidth / 2 + "px";
    D2_3.style.top = change_height - D2_3.offsetHeight / 2 + "px";
}
function GPS3() {
    var D3 = document.getElementById("D3");
    var D3_1 = document.getElementById("D3_1");
    var D3_2 = document.getElementById("D3_2");
    var D3_3 = document.getElementById("D3_3");
    var D3_4 = document.getElementById("D3_4");
    var D3_5 = document.getElementById("D3_5");
    var D3_6 = document.getElementById("D3_6");
    gps3(X1_width, D3_1)
    gps3(X2_width, D3_2)
    gps3(X3_width, D3_3)
    gps3(X4_width, D3_4)
    gps3(X5_width, D3_5)
    gps3(X6_width, D3_6)
    function gps3(X_width, D_1) {
        change_width = X_width * D3.clientWidth;
        change_height = X_width * D3.clientHeight;
        D_1.style.left = change_width - D_1.offsetWidth / 2 + "px";
        D_1.style.top = change_height - D_1.offsetHeight / 2 + "px";
    }

    //   change_width = X1_width * D3.clientWidth;
    //   change_height = X1_height * D3.clientHeight;
    //   D3_1.style.left = change_width - D3_1.offsetWidth / 2 + "px";
    //   D3_1.style.top = change_height - D3_1.offsetHeight / 2 + "px";

    //   change_width = X2_width * D3.clientWidth;
    //   change_height = X2_height * D3.clientHeight;
    //   D3_2.style.left = change_width - D3_2.offsetWidth / 2 + "px";
    //   D3_2.style.top = change_height - D3_2.offsetHeight / 2 + "px";

    //   change_width = X3_width * D3.clientWidth;
    //   change_height = X3_height * D3.clientHeight;
    //   D3_3.style.left = change_width - D3_3.offsetWidth / 2 + "px";
    //   D3_3.style.top = change_height - D3_3.offsetHeight / 2 + "px";

    //   change_width = X4_width * D3.clientWidth;
    //   change_height = X4_height * D3.clientHeight;
    //   D3_4.style.left = change_width - D3_4.offsetWidth / 2 + "px";
    //   D3_4.style.top = change_height - D3_4.offsetHeight / 2 + "px";

    //   change_width = X5_width * D3.clientWidth;
    //   change_height = X5_height * D3.clientHeight;
    //   D3_5.style.left = change_width - D3_5.offsetWidth / 2 + "px";
    //   D3_5.style.top = change_height - D3_5.offsetHeight / 2 + "px";

    //   change_width = X6_width * D3.clientWidth;
    //   change_height = X6_height * D3.clientHeight;
    //   D3_6.style.left = change_width - D3_6.offsetWidth / 2 + "px";
    //   D3_6.style.top = change_height - D3_6.offsetHeight / 2 + "px";
}
function GPS4() {
    var D4 = document.getElementById("D4");
    var D4_1 = document.getElementById("D4_1");
    change_width = G3_width * D4.clientWidth;
    change_height = G3_height * D4.clientHeight;
    D4_1.style.left = change_width - D4_1.offsetWidth / 2 + "px";
    D4_1.style.top = change_height - D4_1.offsetHeight / 2 + "px";
}
//第五页的图片切换（效果：切换div的display）；
function remove(div) {
    for (let i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }
}
function show(div) {
    remove(div);
    if (i == 0) {
        div[i].style.display = "block";
        i++;
    } else {
        div[i].style.display = "block";
        i = 0;
    }
}
function GPS6() {
    var D6 = document.getElementById("D6");
    var D6_2 = document.getElementById("D6_2");
    change_width = F1_width * D6.clientWidth;
    change_height = F1_height * D6.clientHeight;
    D6_2.style.left = change_width - D6_2.offsetWidth / 2 + "px";
    D6_2.style.top = change_height - D6_2.offsetHeight / 2 + "px";
}
function GPS7() {
    var D7 = document.getElementById("D7");
    var D7_1 = document.getElementById("D7_1");
    change_width = T1_width * D7.clientWidth;
    change_height = T1_height * D7.clientHeight;
    D7_1.style.left = change_width - D7_1.offsetWidth / 2 + "px";
    D7_1.style.top = change_height - D7_1.offsetHeight / 2 + "px";
}
function GPS8() {
    var D8 = document.getElementById("D8");
    var D8_1 = document.getElementById("D8_1");
    var shuaxin = document.getElementById("shuaxin");
    change_width = F2_width * D8.clientWidth;
    change_height = F2_height * D8.clientHeight;
    D8_1.style.left = change_width - D8_1.offsetWidth / 2 + "px";
    D8_1.style.top = change_height - D8_1.offsetHeight / 2 + "px";

    change_width = shuaxin_width * D8.clientWidth;
    change_height = shuaxin_height * D8.clientHeight;
    shuaxin.style.left = change_width - shuaxin.offsetWidth / 2 + "px";
    shuaxin.style.top = change_height - shuaxin.offsetHeight / 2 + "px";
}