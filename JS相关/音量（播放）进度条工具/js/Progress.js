/**
 * **********************************
 * create by Function in 2019/08/31
 * 作用： 面向对象思想示例
 * Progress 构造函数
 *  init    :初始化方法
 *  IIFE    :函数写法（立即执行函数表达式）
 * Author   :hxp
 * ***********************************
 **/
(function(window){
    function Progress($progress_Bar,$progress_Line,$progress_Dot){
        return new Progress.prototype.init($progress_Bar,$progress_Line,$progress_Dot);
/*它的作用是让实例化出的对象改为init函数实例出的对象*/
    }
    Progress.prototype={
        constructor:Progress,
        init:function($progress_Bar,$progress_Line,$progress_Dot){
            this.$progress_Bar=$progress_Bar;
            this.$progress_Line=$progress_Line;
            this.$progress_Dot=$progress_Dot;
        },
        progressClick:function(){ /*点击后进度条发生改变*/
/**
 * 备份this指向（progress调用的）
 * 方便$progress_Line和$progress_Dot调用
*/
            let $this=this;
            this.$progress_Bar.click(function(event){
                // 进度条背景距离窗口左边距离
                let normalLeft=$(this).offset().left;
                //点击处距离窗口位置
                let clickPos=event.pageX;
                let diff=clickPos-normalLeft;
                $this.$progress_Line.css("width",diff);
                $this.$progress_Dot.css("left",diff);
            }),
            this.$progress_Line.click(function(){
                var normalLeft=$(this).offset().left;
            })
        },
        progressMove:function(){  /**鼠标点击后移动滚动条进度 */
            var $this=this;
            this.$progress_Bar.mousedown(function(){
                var  normalLeft=$(this).offset().left;
                $(document).mousemove(function(event){
                    let clickPos=event.pageX;
                    let diff=clickPos-normalLeft;
                    /**  防止进度条溢出
                    diff>0?[diff>292? ($this.$progress_Line.css("width",292)&$this.$progress_Dot.css("left",292))
                    :$this.$progress_Line.css("width",diff)& $this.$progress_Dot.css("left",diff)]
                    :$this.$progress_Line.css("width",0)&$this.$progress_Dot.css("left",0);
                    */
                    if(diff<0){
                        $this.$progress_Line.css("width",0);
                        $this.$progress_Dot.css("left",0);
                    }else if(diff>292){
                        $this.$progress_Line.css("width",292);
                        $this.$progress_Dot.css("left",292);
                    }else{
                        $this.$progress_Line.css("width",diff);
                        $this.$progress_Dot.css("left",diff);
                    }
                });
            });
            $(document).mouseup(function(){
                $(document).off("mousemove");
            })
        }
    }
/**
 * 我在构造函数Progress的原型对象中创建一个init函数
 * 把这个函数自己的原型对象init.prototype
 * 改为Progress的原型对象Progress.prototype;
 *    ↓    ↓    ↓    ↓ 
 */
    Progress.prototype.init.prototype=Progress.prototype;
/**
 * 因为init函数的原型对象init.prototype已经改为Progress的原型对象
 * 所以Progress实例化出的对象也可以直接访问init里的属性和方法
 * var dog=new Progress;
 * dog.__proto__===Progress.prototype.init.prototype返回true
 * 所以dog.say()就能访问它的原型init身上的属性或方法了
 *    ↓    ↓    ↓     ↓ 
*/
    window.Progress=Progress;
})(window);
