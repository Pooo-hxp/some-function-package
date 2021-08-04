**这是我参与8月更文挑战的第三天，活动详情查看：[8月更文挑战](https://juejin.cn/post/6987962113788493831)**
### 前言
- 想起来大三的时候模仿搞过一个PC版的播放器
- 正好最近没东西写，便把其中封装的一个模块拆解下来梳理（~~水博客~~）
### 起步
- 面向对象的理论概念罗里吧嗦不再赘述，直接上实操**下方为效果图**
   - 当初大学我们寝室他们叫QQ老冰，钛金手机，所以我叫个老猪佩奇很正常⑧~
![oldPig.PNG](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6106b3deda36442082ab609022e50fd8~tplv-k3u1fbpfcp-watermark.image)
### 分析
   - 其实当时我是利用`z-index图层`及`filter(滤镜) 属性`,来实现的类似于毛玻璃的效果
       - 这部分功能实现在我前天的博客里总结了 👉[点击](https://juejin.cn/post/6991642464096354340)
   - 原因：当歌曲加载后，原生的`Audio`标签不够美观，且不同浏览器表现不一致，改样式又麻烦
       - 因此不如自定义一个
       ![audio.PNG](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1fed79cf2a33494a80491ffec75479fc~tplv-k3u1fbpfcp-watermark.image)
### 解决方案
   - 自定义进度条后，明显会觉得更加的美观**时间太久了，歌词和封面好多资源都没了，歌曲音频还在**
   ![music1.PNG](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5fa1a198fe4d4e658df4d5cdff67e9df~tplv-k3u1fbpfcp-watermark.image)
   - 今天的注意力主要放在进度条的实现上
       - 因为考虑到播放的进度条在音量控制上也要使用，所以将此方法进行了封装
           - 进度条自身的功能，主要包含自动滚动，点击跳转，拖拽跳转
       ![processBar.PNG](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30a885c47c624e3d904b1a0363ea2270~tplv-k3u1fbpfcp-watermark.image)
### 如何实现
---
highlight: an-old-hope
theme: channing-cyan
---
**这是我参与8月更文挑战的第三天，活动详情查看：[8月更文挑战](https://juejin.cn/post/6987962113788493831)**
### 前言
- 想起来大三的时候模仿搞过一个PC版的播放器
- 正好最近没东西写，便把其中封装的一个模块拆解下来梳理（~~水博客~~）
### 起步
- 面向对象的理论概念罗里吧嗦不再赘述，直接上实操**下方为效果图**
   - 当初大学我们寝室他们叫QQ老冰，钛金手机，所以我叫个老猪佩奇很正常⑧~
![oldPig.PNG](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6106b3deda36442082ab609022e50fd8~tplv-k3u1fbpfcp-watermark.image)
### 分析
   - 其实当时我是利用`z-index图层`及`filter(滤镜) 属性`,来实现的类似于毛玻璃的效果
       - 这部分功能实现在我前天的博客里总结了 👉[点击](https://juejin.cn/post/6991642464096354340)
   - 原因：当歌曲加载后，原生的`Audio`标签不够美观，且不同浏览器表现不一致，改样式又麻烦
       - 因此不如自定义一个
       ![audio.PNG](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1fed79cf2a33494a80491ffec75479fc~tplv-k3u1fbpfcp-watermark.image)
### 解决方案
   - 自定义进度条后，明显会觉得更加的美观**时间太久了，歌词和封面好多资源都没了，歌曲音频还在**
   ![music1.PNG](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5fa1a198fe4d4e658df4d5cdff67e9df~tplv-k3u1fbpfcp-watermark.image)
   - 今天的注意力主要放在进度条的实现上
       - 因为考虑到播放的进度条在音量控制上也要使用，所以将此方法进行了封装
           - 进度条自身的功能，主要包含自动滚动，点击跳转，拖拽跳转
       ![processBar.PNG](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30a885c47c624e3d904b1a0363ea2270~tplv-k3u1fbpfcp-watermark.image)
### 如何实现
#### 布局
   - 首先考虑实现进度条的布局解构
```html
  <div class="parent">  <!-- 外容器 -->
    <div class="progress_bar">  <!-- 整个进度条容器 -->
        <div class="progress_line">  <!-- 已经走过的进度条 -->
            <div class="progress_dot"></div>  <!-- 进度点标识 -->
        </div>
    </div>
  </div>
```
#### 构造函数封装
- 然后利用构造函数创建功能函数
    - 篇幅问题，函数里根据可视窗口的代码不全
    - 完整代码 GitHub👉[点击](https://github.com/Pooo-hxp/some-function-package/blob/master/JS%E7%9B%B8%E5%85%B3/%E9%9F%B3%E9%87%8F%EF%BC%88%E6%92%AD%E6%94%BE%EF%BC%89%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%B7%A5%E5%85%B7/js/Progress.js)
```javascript
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
                --------
            }),
            this.$progress_Line.click(function(){
               --------
            })
        },
        progressMove:function(){  /**鼠标点击后移动滚动条进度 */
            var $this=this;
            this.$progress_Bar.mousedown(function(){
                var  normalLeft=$(this).offset().left;
                $(document).mousemove(function(event){
                    ---------
                });
            });
            $(document).mouseup(function(){
                $(document).off("mousemove");
            })
        }
    }
```
 * 在构造函数Progress的原型对象中创建一个init函数
 * 把这个**函数自身原型对象init.prototype改为Progress的原型对象Progress.prototype**;
 *  这样Progress实例化出的对象也可以直接访问init里的属性和方法
 *  `  ↓    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ `
 ```javascript
     Progress.prototype.init.prototype=Progress.prototype;
 ```
 - 同时挂载到全局`window`身上，便于使用
 ```javascript
 window.Progress=Progress;
 ```
 - 函数调用
 ```javascript
   $(function(){
    let $progress_Bar=$(".progress_bar");
    let $progress_Line=$(".progress_line");
    let $progress_Dot=$(".progress_dot");
    var progress=new Progress($progress_Bar,$progress_Line,$progress_Dot);
    progress.progressClick();
    progress.progressMove();
  })
 ```
 #### 初始效果图
 ![processBarGif.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11c15083dc95472b8ca4870f6b1b2a9d~tplv-k3u1fbpfcp-watermark.image)
       
       
