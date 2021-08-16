## `# 前言`
- **`原生CSS实现图标`** 的好处
    - 项目中图标的引入固然方便，但对于简易的图标可以使用CSS实现，来减轻服务器的压力。
    
###  思考的过程
#### 观察`border`属性
```css
        width: 100px;
        height: 100px;
        border-top: 5px solid yellowgreen;
        border-bottom: 5px solid deeppink;
        border-left: 5px solid hotpink;
        border-right: 5px solid skyblue;
```

![borderBox.PNG](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75fc6a398cdf4776a4f107215d75a263~tplv-k3u1fbpfcp-watermark.image)
#### 这个时候调大`border`值，同时缩小`div`宽高
```css
        width: 50px;
        height: 50px;
        border-top: 25px solid yellowgreen;
        border-bottom: 25px solid deeppink;
        border-left: 25px solid hotpink;
        border-right: 25px solid skyblue;
```
![border2.PNG](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95990920ce8f4054b45f8790777f518c~tplv-k3u1fbpfcp-watermark.image)
  - 如果这个时候还是没有很明显的话，那么直接移除容器宽高即可
  ```css
        width: 50px;
        height: 50px;
        border-top: 25px solid yellowgreen;
        border-bottom: 25px solid deeppink;
        border-left: 25px solid hotpink;
        border-right: 25px solid skyblue;
```

![border3.PNG](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb9b604e7584455681a0d8322a775754~tplv-k3u1fbpfcp-watermark.image)
- 这个时候就能很明显的看到，当**容器内宽高为0时**，边框由原来的`梯形`变成了`三角形`
- 此时思路就很清晰了
    - 保留自己想要的三角形朝向
    - ‘移除’其余无用的三边
- 操作尝试
```css
    width: 0px;
    height: 0px;
    border-top: 50px solid yellowgreen;
    border-bottom: 50px solid deeppink;
    /* border-left: 50px solid hotpink; */
    border-right: 50px solid skyblue;
```

![border4.PNG](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/102dcfd71d044b1eb98cad826c9d52c2~tplv-k3u1fbpfcp-watermark.image)
- 此时会发现
    - 当移除一边时，由于没有‘支撑’，所以会导致继续变形
    - 那么可以保留其他边框，利用 `transparent`shiqita
```css
        width: 0px;
        height: 0px;
        border-top: 50px solid transparent;
        border-bottom: 50px solid transparent;
        border-left: 50px solid transparent;
        border-right: 50px solid skyblue;
```
- 这样就能实现三角形，根据改变对应边框透明色，实现想要的朝向
![border.PNG](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b87d9a0011b9441b80ad9b5d33d4b2b8~tplv-k3u1fbpfcp-watermark.image)
- 或者各种形态的三角形
```css
        width: 0px;
        height: 0px;
        border-top: 50px solid transparent;
        border-bottom: 50px solid deeppink;
        border-right: 50px solid transparent;
```
![border5.PNG](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94c1c734d16a4184ba4344c0bc0583b1~tplv-k3u1fbpfcp-watermark.image)
- 具体怎么去变形玩，随自己心意。

![processBarGif.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7a1a5c1299f4e638c0546326536278a~tplv-k3u1fbpfcp-watermark.image)
### 补充内容（可以不看）
#### link和@import的区别
#### CSS的引入方式有四种：
-   内联（元素上的style属性）
-   内嵌（style标签）
-   外链（link）
-   导入（@import）
#### link和@import的区别
-   功能不同
    -   link是XHTML标签，除加载CSS外，还可以定义RSS等事物
    -   @import属于CSS范畴只可加载CSS

-   加载顺序不同

    -   link引用CSS时，在页面载入时同时加载；
    -   @import需要页面完全载入后才可加载

-   兼容性问题不同

    -   link是XHTML标签，无兼容性问题；
    -   @import由于是CSS2.1提出的，因此低版本浏览器不支持

-   对样式修改方法支持不同

    -   link支持使用JavaScript控制DOM改变样式
    -   @import不支持
