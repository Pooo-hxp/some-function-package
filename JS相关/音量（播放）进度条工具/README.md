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
       
