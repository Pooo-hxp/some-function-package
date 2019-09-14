(function(window){
    const lf=$("#prev");
    const rg=$("#next");
    let $li=$("#list>li");
    let $dot=$("#dot>li");
    var flag=0;
    $li.eq(flag).fadeIn().siblings().fadeOut();
    lf.click(function(){
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
    $dot.eq(flag).addClass("active").siblings().removeClass("active");
    $li.eq(flag).fadeIn().siblings().fadeOut();
    }
    $("#box").mouseover(function(){
       clearTimeout(bystop);
    })
    $("#box").mouseleave(function(){
        /**不使用var声明，暴露给外界，覆盖之前定时器，不然会叠加 */
      bystop=window.setInterval(settime, 2000)
     })
})(window);