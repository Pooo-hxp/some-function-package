## `# 前言`
- **`高斯模糊`** 可以让页面更美观，利用图层关系及`CSS3 的filter(滤镜) 属性`
    
###  高斯模糊的实际运用
   - 实现一个简单的演示示例
```javascript
    <div class="maskingimg" id="maskingimg"></div>
    <div class="maskingcolor"></div>
```
   - 其中blur中数值越大，模糊程度越高
   - 再配合一些简单样式，如maskingcolor中增加透明色覆盖，会显得异常美观
```javascript
.maskingcolor {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: rgba(245, 240, 245, 0.35);
}

.maskingimg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    background: url(../image/photo/msg-bg.png);
    background-size: cover;
    -webkit-filter: blur(1px); /* Chrome, Safari, Opera */
    filter: blur(1px);
}
```
#### 效果图如下
![maskBefor.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/477727872fd64824bbbca46578a064c9~tplv-k3u1fbpfcp-watermark.image)
![maskAfter.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0796e8c064c4e2ea5b7e35bf6b7eae5~tplv-k3u1fbpfcp-watermark.image)
#### 关于`filter(滤镜) 属性`对象
   - 这里用的 `blur`
        - 给图像设置高斯模糊，设置PX时，是屏幕上以多少像素融在一起， 所以值越大越模糊；
        - 滤镜可用百分比, 也可以使用小数来表示。
        
| 属性 | 说明 |类型|
| --- | --- |---|
|  sepia| 褐色 |值为0-1之间的小数|
|  saturate| 饱和度 |值为num|
|  hue-rotate| 色相旋转 |值为angle （默认值为0deg）|
|invert |反色 | 值为0-1之间的小数 |
|opacity |透明度 |值为0-1之间的小数 |
| brightness|亮度 |值为0-1之间的小数 |
|contrast  | 对比度| 值为num|
|blur  | 模糊| 值为length|
| drop-shadow  | 阴影| |

#### 兼容性
   - 关于filter支持的浏览器版本
       - `18.0`  Chrome 
       - `35.0`  FireFox
       - `6.0`   Safari      
       - `15.0`  Opera
       - 全系不支持 IE 及 Edge
       
###  伪元素及伪类的运用
   #### 单纯利用CSS画出一个心，实现过程的轨迹如下图
   ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b51c207e7e58496ab47b3aedd9fdc953~tplv-k3u1fbpfcp-zoom-1.image)
   #### 实现的步骤
   - 首先是固定个容器的宽高及背景色并进行```relative```定位
   ```html
  .heart {
        width: 30px;
        height: 30px;
        background: red;
        position: relative;
    }
    <div class="heart"></div>
```
- 然后利用伪类元素```:after```和```:before```，使用```inherit```继承父类属性值
- 注意：要位移正方形主元素的一半，使的伪类都能‘内嵌’入主元素
 ```css
  .heart:after,
  .heart:before {
            content: '';
            width: inherit;
            height: inherit;
            background: inherit;
            position: absolute;
        }
 .heart:after { top: -15px; }
.heart:before { left: -15px; }
 ```
   - 此时它的形态
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/192368ca1fbd40cbbf886170011071cc~tplv-k3u1fbpfcp-zoom-1.image)
  - 然后是边框圆角，在伪类元素身上利用 `border-radius: 50%`创造出两个半圆
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22736985a6d04d0a8626e847521eb221~tplv-k3u1fbpfcp-zoom-1.image)
 - 此时图像是有了，就是方向是有点歪（两个伪类元素先用不同的颜色，方便观察变化）
 - 最后利用`transform`旋转后改为同一色系就大功告成啦！
 ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/036b09cc42f14538acc8d85f0853285e~tplv-k3u1fbpfcp-zoom-1.image)
 #### 完整示例代码，快去粘贴过去自己看看效果吧
 ```css
<style>
  .heart {
    width: 30px;
    height: 30px;
    top: 50px;
    left: 50px;
    background: red;
    position: relative;
    transform: rotate(45deg);
    /*兼容浏览器*/
    /* -webkit-transform: rotate(45deg); */
    /* -moz-transform: rotate(45deg); */
    }
    .heart:after,
    .heart:before {
        content: '';
        width: inherit;
        height: inherit;
        background: inherit;
        border-radius: 50%;
        /* -webkit-border-radius: 50%; */
        /* -moz-border-radius: 50%; */
        position: absolute;
    }
    .heart:after { top: -15px; }
    .heart:before { left: -15px;}
 </style>
  <body>
    <div class="heart"> </div>
  </body>
 ```
