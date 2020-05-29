#### 记录一次笔试题
* 2020.5.23参加房极客的笔试，为方便以后掌握重点，特记录下来.
* 补充：新加了一些其他公司的面试题，为了方便归类合到一起了
##### 已知函数‘fun’将返回一个Promise'p','p'的结果取决于参数‘promises’（一个不定长的Promise数组）
#### 如果参数中任何一个Promise状态为成功，则‘p’状态也为成功，如果参数中所有Promise状态为失败
#### 则‘p’状态也为失败，请在不借助其他Promise方法前提下实现这个函数
  ```
  /**
   *@param{Promise[]} promises
   *@return {Promise} p
   */
- function fun(promises){}
```
##### 已知JSONP请求函数实现如下，但同时发送多个请求时容易出错，请分析错误原因，
##### 并在不改变函数签名的前提下调整代码解决问题
 ```
   题如下 function sendJsonp(url,callback){
        const script=document.createElement('script');
        script.src=url+'?name=fun'
        windows.fun=callback;
        document.body.appendChild(script);
    }
```    
----
##### 解释下什么是事件代理
-  事件代理又叫事件委托，是JavaScript中常用的额绑定事件的技巧。
'事件代理'即是把原本需要绑定的事件委托给父元素，让父元素担当事件监听职务。
事件代理是原理是DOM元素的冒泡事件，使用事件代理的好处是提高性能
-  可以节省内存的占用，减少事件注册
-  可以实现新增子对象时无需再次对其绑定
##### new操作符具体做了什么
-  创建一个空对象: 并且this变量引入该对象,同时还继承了函数的原型
`var obj=new Object();`
-  设置原型链 空对象指向构造函数的原型对象
`obj.__proto__= Func.prototype;`
-  执行函数体 修改构造函数this指针指向空对象,并执行函数体
`var result =Func.call(obj);`
-  判断返回值 返回对象就用该对象,没有的话就创建一个对象
```
 if (typeof(result) == "object"){
  func=result;`
 }
 else{
    func=obj;
 }
```
##### 前端需要注意哪些seo    
##### <img>的title和alt区别    
##### 从浏览器地址栏输入url到显示页面的步骤    
##### 语义化的理解    
##### Canvas和SVG有什么区别    
##### css sprite是什么有什么优缺点 
##### 什么是FOUC,如何避免 
##### link与@import的区别 
##### BFC规范的理解 