(function(window){
    let $li=$("#list>li");
    let $dot=$("#dot>li");
    function Loop(){};
    var flag=0;
/**面向对象写法 */
    Loop.prototype={
        constructor:Loop,
        lfun:function(){
            flag==0?flag=4:flag--;
            $li.eq(flag).fadeIn().siblings().fadeOut();
            $dot.eq(flag).addClass("active").siblings().removeClass("active");
        },
        rfun:function(){
            flag==4?flag=0:flag++;
            $li.eq(flag).fadeIn().siblings().fadeOut();
            $dot.eq(flag).addClass("active").siblings().removeClass("active");
            console.log(flag);
        },
        timer:function(){
            console.log("开启轮播");
         settime= setInterval(Loop.prototype.rfun,2000)
        },
        removetimer:function(){
            console.log("移除定时器"); 
            clearInterval(settime);
        }
    };
    window.Loop=Loop;
})(window);

/**下方为普通面向过程写法 */
    /*lf.click(function(){
        flag==0?flag=4:flag--;
        $li.eq(flag).fadeIn().siblings().fadeOut();
        $dot.eq(flag).addClass("active").siblings().removeClass("active");
    })
    rg.click(function(){
        flag==4?flag=0:flag++;
        $li.eq(flag).fadeIn().siblings().fadeOut();
        $dot.eq(flag).addClass("active").siblings().removeClass("active");
    }) 
    var bystop=window.setInterval(settime,2000);
    function settime(){
        flag==4?flag=0:flag++;
        $li.eq(flag).fadeIn().siblings().fadeOut();
        $dot.eq(flag).addClass("active").siblings().removeClass("active");
    }
    $("#box").mouseover(function(){
       clearTimeout(bystop);
    })
    $("#box").mouseleave(function(){
        //不使用var声明，暴露给外界，覆盖之前定时器，不然会叠加 
      bystop=window.setInterval(settime, 2000)
     })
     */
