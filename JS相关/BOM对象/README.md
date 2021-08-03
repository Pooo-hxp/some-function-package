---
highlight: an-old-hope
theme: channing-cyan
---
### 什么是BOM？
#### BOM的定义
   - `BOM（Browser Object Model）`即浏览器对象模型
   - 概念：**BOM核心对象是window**，它表示浏览器的一个实例。
       - 在浏览器中，window是通过JavaScript访问浏览器窗口的接口，同时又是ECMAScript（标准）规定的Global（全局）对象
       - 这也就是说“在网页定义的任何对象、变量、函数都以window作为其Global对象
   - 作用：因为window有着双重角色，所以在全局作用域声明的变量、函数、都会变成window对象的属性和方法。
   ```javascript
/**
*全局作用域定义的变量age和一个函数callage都被自动的归在了
*window对象名下，因此可以通过window.age访问和调用函数
*/  
 var name='poo';
    function callage(){
        console.log(this.name);
    }
    console.log(window.name); // poo
    callage(); // poo
    window.callage(); //poo
```
#### 直接定义全局变量和在window对象上定义变量的区别
-   直接定义的全局变量不能通过delete操作符删除
-   在window对象上定义的属性可以被delete操作符删除
```javascript
    var age=16;
    window.color='pink';
    delete window.age;
    delete window.color;
    console.log(window.age);//16
    console.log(window.color);//undefined
```
#####  原理（了解就行）
   - 因为使用var语句添加的window属性，有一个叫做`[(Configurable)]`的特性，这个特性的值被设置为false，规定这样定义的属性不可通过delete操作符删除。
