### 九月初参加亚信笔试，在这里记录一下，以后也在掘金记录自己作为小菜鸟的成长过程。  
***
##### *对Markdown还不是很熟悉，所以排版会差一点，抱歉了;*  
### 1、列举常用的行内标签块级标签和空标签
* 行内元素：和其它元素在同一行上，元素宽/高及顶部/底部边距不可设置，元素宽度为包含内容宽度不可改变  
    * 例如：a、big、br、code、em、i、img、input small、span、strong、label、q
* 块级元素：每个块级元素都从新一行开始，元素宽/高及顶部/底部边距可自定义，元素默认情况下和它父元素宽度一致  
  * 例如： ```div、dl、form、h系列、menu、p、pre、ul、ol```
* 空元素：指的是在HTML中，没有内容
  * 例如：```br、hr、input、img、link```
***
### 2、display有哪些常用值说明它们的作用
```javascript
 * display:none;//此元素不会被显示
 * display:block;//此元素以块级元素展示，前后有换行符
 * display:inline;//默认值，以内联元素显示，无前后换行符
 * display:inline-block;//行内块级元素
 * display:table;//此元素以块级表格来显示  
 ```
 ***
### 3、谈谈position的几种定位
```javascript
 * positipon:static;//默认值，没有定位;
 * position:relative;//相对定位，相对于其原先所占的位置为基准进行偏移；
 * position:absolute;//绝对定位，相对于第一个非默认定位以外的父元素进行定位；
 * position:fixed;//固定定位，相对于浏览器窗口进行定位，且不会随屏幕滚动；
 ```
  ***
 ### 4、简单说一下盒子模型
 * 盒子模型有两种：
   * W3C标准盒子模型
   * IE的怪异盒子模型
 * W3C定义的标准盒模型包括：
 ```
   * margin border padding content
 ```
 * 标准盒模型中元素的width=content；
 * IE怪异盒模型大致与标准盒模型相同，区别在于：
   * 怪异盒模型中元素的width=content+padding+border
 * 在CSS3中：
 ```javascript
   * box-sizing:content-box
   * box-sizing:border-box
   * box-sizing:inherit
   * box-sizing: inherit;//规定应从父元素继承 box-sizing属性的值。
   ```
 * 即box-sizing指定盒子模型种类
   * content-box指定盒子模型为W3C（标准盒模型)
   * border-box为IE盒子模型（怪异盒模型）
 ***
  ### 5、H5和CSS3的新特性
* 语义化标签：
 ``` header、footer、nav、section、aside、article```
 * 音频视频：```audio，video```
 * 绘制：```canvas```
 * 拖拽：```draggable``` 设置为true 可以被拖拽
 * 本地存储：
 * ```localStorage``` - 没有时间限制的数据存储；
 * ```sessionStorage``` - 针对一个```session```的数据存储，
 *    当用户关闭浏览器窗口后，数据会被删除；
 * 新事件：```onresize、ondrag、onscroll、onmousewheel、onerror、onplay、onpause```
 #### CSS3中新特性 
 * ***选择器***：
 ```
    * :last/first-child选择元素首/尾子代
    * :nth-child(num/even/odd)选择指定/偶数/奇数
    * :checked选择每个被选中的元素
    * ::selection选择被用户选取的元素部分
```
 * ***伪类*** 
 ```
   * a:link{color:skyblue}选择未访问的链接
   * a:hover{color:skyblue}鼠标移动到链接上
   * a:avtive{color:skyblue}选中的链接
 ```
  * ***背景和边框*** 
 ```
    * background-size:规定背景图尺寸
    * background-origin:规定背景图片的定位区域
    * 背景图片可以放置于 content-box、padding-box 或 border-box 区域
    * border-radius:圆角
    * box-shadow/text-shadow:阴影
    * border-image:边框图片
    * translate():元素从当前位置移动，根据给定的left(x坐标)和top(y坐标)参数
```
 ***
### 6、谈谈浮动和如何清除浮动
 * 清除浮动：为解决高度坍塌
 * 因为子元素浮动，使父元素高度无法被撑起，造成高度坍塌
 * 这是需在父元素身上设置```overflow:auto/hidden```就可以了
 * 另一种清除浮动的方法是在需清除浮动元素的前面增加空```div```
 * 设置样式```clear：both;```
  ***
### 7、谈谈ajax中的get和post并手写一个ajax
  get和post都是ajax中最常用的两种请求方式其中：
 * ***get方法*** 
   * get中传参请求是在URL的尾部利用 “？”代表URL地址结尾与数据参数的开端，后边以名称=值的形式且以&进行连接
   * get请求参数客户端可见，因此不安全
   * 因为是在地址符上拼接参数所以传送数据量小（2KB左右）
 * ***post方法*** 
   * post中传参是放在http主体中，
   * 参数隐藏因此更安全，且传输数据量大
 * ***手写ajax***
  ```javascript
 function hxp_ajax(obj){
     if(obj.type.toLowerCase()=='get'){
         var arr=[];
         for(var jian in obj.data){
             let str=`${jian}=${obj.data[jian]}`;
             arr.push(str);
         }
         var ps=arr.join('&');
         data.url+=ps;
     }else{
         var formdata=new FormData();
         for(let jian in obj.data){
             formdata.append(jian,obj.data[jian]);
         }
     }
 var xhr=new XMLHttpRequest();
     xhr.onreadystatechange=function(){
         if(xhr.readyState==4){
             if(xhr.status==200){
                 console.log(xhr.responseText)
                 console.log(JSON.parse(xhr.responseText))
             }
         }
     }
     xhr.timeout=3000;
     xhr.timeout=function(){
         console.log('请求超时')；
     }
     xhr.open(obj.type,obj.url,true);
     obj.type.toLowerCase()=='get'?xhr.send(null:xhr.send(formdata);
 }
 ```
   ***
  ### 8、谈谈cookie、sessionStorage、localStorage的区别联系
 * ***cookie***  
   * cookie数据始终在同源http请求中携带，在浏览器和服务器之间来回传递
   * 大小：cookie传输数据很小不超过4KB，
   * 作用：http请求都会携带cookie，只适合携带小数据如：会话标识
   * 过期时间：仅在设置的cookie过期时间之前
 * ***sessionStorage和localStorage*** 
     * 二者一般仅在本地保存
     * 大小：二者都很大可达5M以上
     * 过期时间：
        * ```sessionStorage```仅在当前浏览器页面关闭之前有效
        * ```localStorage```始终有效，即使浏览器页面/窗口关闭也会一直保存
     * 作用：用作持久数据的保存
 ***
### 9、谈谈JavaScript中的原型链和继承
 ``` 这里涉及了很多,我个人也做了很多笔记,这里只大致说下```
 * JavaScript能通过原型链实现方法的继承复用,这大大的减少了重复的代码编写，也让代码更加的整洁规范
 * 原型链实现继承（其实就是子类继承父类属性和方法）
 * 实现继承的关键之处在于
 ```javascript
   Son.prototype = new Father();
   var sonObj_2 = new Son();
 ```
 * 这里很好理解通过new Son()生成的实例对象
``` 
sonObj_2中的proto指向Son.prototype
  而Son.prototype又指向Father的实例对象
  Father的实例对象的proto指向Father.prototype
  因此Son实例化出的对象通过原型链的查找
  都具有构造函数Father身上的属性和方法了
 ```
 ### 10、给定一个字符串，输出字符串中出现频率最高的字符
 ```javascript
 function seleMax(){
    var str=document.getElementById('text').value;
    var arr=str.split('');
    var json=[];
    for(let i=0; i<arr.length;i++){
        json[arr[i]]?json[arr[i]]+=1:json[arr[i]]=1;
    }
    var char='';
    var num=0;
    for(var hxp in json){
        json[hxp]>num?(num=json[hxp],char=hxp):null
    }
    console.log(json);
    console.log(`出现频率最高的字符为${char},它出现了${num}次`);
}
 ```
 ![代码测试结果](https://user-gold-cdn.xitu.io/2019/9/24/16d6131b8a1af712?w=520&h=324&f=png&s=20685)
 ##### 和网传的一样，亚信的笔试题很简单，虽然如此但上面很多内容是我后来又搜集一些补充上来的，整理过程难免有些错误，作为一名大四的小菜鸡，诚心希望各位指正；