### 关于Promise对象
##### Promise是什么
* 它是JS中进行异步编程的解决方案
* 语法上来说：它是一个构造函数
* 功能上说：它用来封装一个异步操作，并获取结果
* Promise的状态,且状态只可改变一次，不可逆
 1. pending(初始状态，未确定)变为resolved(成功)
 2. pending(初始状态，未确定)变为rejected(失败) 
##### Promise的基本流程
*                                    （resolved状态）
*                             ——>成功，执行resolve()——>then()
* new Promise()->执行异步操纵                                  =>新的Promise对象
*                             ——>失败，执行reject() ——>catch()
*                                      （rejected状态）
```
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