### 实现过程中它的变化，及最终效果如下图展示

![](https://user-gold-cdn.xitu.io/2019/10/28/16e10b1db8a74889?w=816&h=263&f=png&s=6481)
#### 由此轨迹可以看出是如何制作的
一、初始
* 首先是提供一个```div```设置其宽高及背景色并使用```relative```进行定位
     ```css
    .heart {
        width: 30px;
        height: 30px;
        background: red;
        position: relative;
    }
    ```
* 在CSS中定义它的伪类元素```:after```和```:before```利用```inherit```继承父类属性值
 ```css
  .heart:after,
  .heart:before {
            content: '';
            width: inherit;
            height: inherit;
            background: inherit;
            position: absolute;
        }
 .heart:after {
            top: -15px;
        }

.heart:before {
            left: -15px;
        }
 ```
  ![](https://user-gold-cdn.xitu.io/2019/10/28/16e10c83d32e983e?w=701&h=102&f=png&s=1439)
结果： 此时它的形态就是上图中图一中的那种形态
***
二、在两个伪类身上添加属性使两个正方形伪类变为两个圆
 ```css
 border-radius: 50%;
 ```
![](https://user-gold-cdn.xitu.io/2019/10/28/16e10ca1357d658d?w=703&h=102&f=png&s=2438)
* 这里使用不同背景色是为了方便查看它的变化
![](https://user-gold-cdn.xitu.io/2019/10/28/16e10cbb305eba3d?w=697&h=106&f=png&s=1984)
 结果：因为二者都位移自身一半的宽高，所以变为了图二和图三的形状
 ***
 三、再利用CSS3让它顺时针旋转45度
```css
 transform: rotate(45deg);
```

![](https://user-gold-cdn.xitu.io/2019/10/28/16e10d3bc36b557e?w=698&h=100&f=png&s=2075)
结果：大功告成啦！
### 上述为拆分步骤，完整代码如下，直接复制就能使用，按实际需要修改参数
HTML
```html
<body>
    <div class="heart">
    </div>
</body>
```
CSS
```css
          .heart {
            width: 30px;
            height: 30px;
            top: 50px;
            left: 50px;
            background: red;
            position: relative;
            transform: rotate(45deg);
            /*下面是为了做兼容*/
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

        .heart:after {
            top: -15px;
        }

        .heart:before {
            left: -15px;
        }
```
作者：Sad_Pooo
链接：https://juejin.im/post/5db671d26fb9a02056019f91
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
