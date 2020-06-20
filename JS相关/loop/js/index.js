    const control=new Loop;
    control.timer();
    console.log(Loop.prototype.constructor===Loop);
    document.getElementById("box").addEventListener("mouseover",control.removetimer);
    document.getElementById("box").addEventListener("mouseleave",control.timer);
    document.getElementById("prev").addEventListener("click",control.lfun);
    document.getElementById("next").addEventListener("click",control.rfun); 