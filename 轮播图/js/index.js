(function(window){
    function Carouse(id){
        this.odiv=document.getElementById(id);
        this.oul1=document.getElementById("list");
        this.imgs=this.oul1.getElementsByTagName("li");
        this.oul2=document.getElementById("dot");
        this.dots=this.oul2.getElementsByTagName("li");
        this.prev=document.getElementById("prev");
        this.next=document.getElementById("next");

        this.width=this.imgs[0].offsetWidth;//图片的宽度
        this.imgnum=this.imgs.length;//轮播图数量
        this.dotnum=this.dots.length;//控制点数
        this.num=1;//当前图片下标
        this.timer=null;//轮播过渡
        this.timer2=null;//自动轮播播放器
        this.stop=true;//过渡效果执行完开关
    }
    /**定义轮播图方法 */
    Carouse.prototype.init=function(){
        var _this=this; //保存this指向
        // this.odiv.onmouseover=function(){
        //     /**鼠标移入清除定时器停止轮播 */
        //     clearInterval(_this.timer2);
        // }
        // this.odiv.onmouseout=function(){
        //     /**鼠标移出则启动轮播 */
        //     _this.timer2=setInterval(() => {
        //         _this.move();
        //     },3000);
        // };
    }

        Carouse.prototype.move=function(){
            let flag=5;
            this.imgs.style.display="block";
        }
    var box=new Carouse("box");
    box.move();
})(window);