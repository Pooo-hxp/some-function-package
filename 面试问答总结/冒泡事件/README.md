
### **什么是JS冒泡事件**
- 冒泡事件就是点击子节点，会向上触发父节点，祖先节点的点击事件 
- 即在`父div中`存放`子div`的情况下，在这两个div上都添加了事件,如果点击里面的div，外层div事件也执行
- 如下方示例，就是一个冒泡事件：
```html 
    <div id="div1" onclick="div1()">
            这是div1
        <div id="div2" onclick="div2()"> 这是div2 </div>
    </div>
    <script>
        function div1() { alert("这是div1") }
        function div2() { alert("这是div2") }
    /*此时点击div2会依次弹出 这是div2，这是div1*/
    </script>
```
#### **认识addEventListener 事件监听器 (冒泡事件）函数**
- 一个标签无法同时绑定多个触发事件，因为后者会覆盖前者
- 使用`addEventListener`则不会出现这种情况
    - 1、后面绑定的事件照样会执行
    - 2、不会被覆盖
    - 3、调用者是事件源bt.addEventListener
        - 3.1、参数1，事件名（所有DOM事件不带on）
        - 3.2、参数2执行函数("click",fn1)
        - 3.3、参数3事件名(捕获或者冒泡)
    - 4、火狐谷歌IE9+ 支持addEventListener  
 ```javascript
        EventListen = {
            EventListener: function (stl, fn, ele) {
                if (stl.addEventListener) {
                    stl.addEventListener(ele, fn)
                } else if (stl.attachEvent) {
                    stl.attachEvent("on" + ele, fn)
                } else {
                    stl["on" + ele] = fn
                }
            }
        }
 ```
 #### **冒泡事件与捕获事件;**
 - 通过更改addEventListener事件监听器的参数，改变事件的触发顺序：
 - addEventListener第三个参数useCapture ， true时为捕获，false时为冒泡
 - 实例如下：
 ```javascript
 <div id="div1">
    这是div1;
    <div id="div2">	 这是div2 </div>
</div>
    document.getElementById("div1").addEventListener("click",div1,true)
    document.getElementById("div2").addEventListener("click", div2,true);
    function div1(){   alert("这是div1") };
    function div2(){   alert("这是div2") };
 ```
- 直接点击div2为捕获，会依次弹出 这是div1，这是div2
- 第三个参数改为false为冒泡，依次弹出 这是div2，这是div1
#### **阻止冒泡事件;**
- w3c的方法是`e.stopPropagation()`
- IE则是使用`e.cancelBubble = true`
    - 这样就不会继续触发之后的事件
    - 另一种是直接在执行完触发的当前函数后，直接`return false `
    - 如下所示，就不会触发事件冒泡
```javascript
    $("#div1").click(function() {
        alert("div1")
    })
    $("#div2").click(function() {
        alert("div2")
        event.stopPropagation(); // 事件处理过程中，阻止了事件冒泡，但不会阻击默认行为
    })
```
### `target`和`currentTarget`
#### 二者的介绍
e.target        | Object | 触发事件的组件的属性值集合 |
| --------------- | ------ | ------------- |
| e.currentTarget | Object | 当前组件的属性值的集合
- target为触发事件的源组件
- currentTarget为事件绑定的当前组件
#### 在事件触发中
- `e.currentTarget`指的是注册了事件监听器的对象
- `e.target`真正触发这个事件的对象
    -  两者在没有冒泡的情况下相同。
    - 只要记住 `currentTarget`始终是监听事件者，`target`是事件的真正发出者就可。
