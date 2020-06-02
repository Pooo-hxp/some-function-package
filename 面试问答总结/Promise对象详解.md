 * **********************************
  - create the document on 2020/06/01
  - 作用： 深入理解Promise
  - Author   :土豆哥
 * ***********************************
### 关于Promise对象
##### Promise是什么
+ 它是JS中进行异步编程的解决方案
+ 语法上来说：它是一个构造函数
+ 功能上说：它用来封装一个异步操作，并获取结果
+ Promise的状态,且状态只可改变一次，不可逆
  - pending(初始状态，未确定)变为resolved(成功)
  - pending(初始状态，未确定)变为rejected(失败) 
  ---
##### Promise的基本流程
* &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;（resolved状态）
* &#8195;&#8195;&#8195;&#8195; &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;——>成功，执行resolve()——>then()
* new Promise()->执行异步操纵&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195; &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;=>新的Promise对象
* &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;——>失败，执行reject() ——>catch()
* &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;（rejected状态）
```javascript
  const pro=new Promise((resolve,reject)=>{
      //在这里执行异步操作任务
      setTimeout(()=>{
          let flag=Math.floor(Math.random()*10)
         //成功,调用resolve(value);失败,调用reject(reason)
          flag>5?resolve('成功大于5了是'+flag):reject('失败了,没有大于5是'+flag)
      },1000)
  })
  pro.then(
      value=>{//接收成功返回的value
      console.log('成功的回调',value)
      },
      reason=>{//接收失败的reason数据
      console.log('失败的回调',reason)
      }
  )
```
 ---
##### 为什么要使用Promise？
* 应用其链式调用，解决回调地狱
* 回调地狱指的是回调函数的嵌套调用，不利于代码的阅读，不利于错误处理
* 外部回调函数异步执行的结果是嵌套的回调函数执行的条件
```javascript
//回调的嵌套
 doSomething(function(result){
     doSomethingElse(result,function(newResult){
         doThirdThing(newResult,function(finalResult){
             console.log('回调结束')
         },failureCallback)
     },failureCallback)
 },failureCallback)
 //Promise的链式调用
 doSomething().then(function(result){
     //当前回调成功后，执行.then方法才会调用下一个回调函数
     return doSomethingElse(result)
 })
 .then(function(newResult){
     return doThirdThing(newResult)
 })
 .then(function(finalResult){
     console.log('回调结束')
 })
 .catch(failureCallback)
 //回调的终极解决方案 async/await
 async function request(){
     try {
         const result=await doSomething();
         //从上往下，执行完才会继续往下，有异常就抛出
         const newResult=await doSomethingElse();
         const finalResult=await doThirdThing();
         console.log('回调结束')
     } catch (error){
         failureCallback(error)
     }
 }
```
  ---
##### 如何使用Promise？
+ 一、`Promise`构造函数：`Promise(excutor){}`
  - `excutor`函数：同步执行`(resolve,reject)=>{}`
  - `resolve`函数：内部定义成功时调用的函数`value=>{}`
  - `reject`函数：内部定义失败时调用的函数`reason=>{}`
  -  说明：`excutor`在`Promise`内部立即同步回调，异步操作在执行器中执行
+ 二、`Promise.prototype.then`方法：`(onResolve,onRejected)=>{}`
  - `onResolved`函数：成功的回调函数`(value)=>{}`
  - `onRejected`函数：失败的回调函数`(reason)=>{}`
  - 说明：指定用于得到成功value的成功回调，和用于得到失败reason的失败回调，返回新的Promise对象
+ 三、`Promise.prototype.catch`方法：`(onRejected)=>{}`
  - `onRejected`函数：失败的回调函数`(reason)=>{}`
  - 说明：`then()`的语法糖，相当于：`then(undefined,onRejected)`
+ 四、`Promise.resolve`方法：`(value)=>{}`
  - `value`：成功的数据或者`Promise`对象
  - 说明：返回一个成功的Promise对象
+ 五、`Promise.reject`方法：`(reason)=>{}`
  - `reason`：失败的原因
  - 说明：返回一个失败的Promise对象
+ 五、`Promise.all`方法：`(promise)=>{}`
  - `promise`：包含N个promise的数组
  - 说明：返回一个新的的Promise对象，所有的promise都成功才成功，任一失败直接失败
+ 六、`Promise.race`方法：`(promise)=>{}`
  - `promise`：包含N个promise的数组
  - 说明：返回一个新的的Promise对象，第一个完成的Promise的结果状态就是最终的结果状态
 ---
