#### 记录一次笔试题
- 2020.5.23参加房极客的笔试，为方便以后掌握重点，特记录下来.
##### 已知函数‘fun’将返回一个Promise'p','p'的结果取决于参数‘promises’（一个不定长的Promise数组）
#### 如果参数中任何一个Promise状态为成功，则‘p’状态也为成功，如果参数中所有Promise状态为失败
#### 则‘p’状态也为失败，请在不借助其他Promise方法前提下实现这个函数
- /**
-   * @param{Promise[]} promises
-   * @return {Promise} p
-  */
- function fun(promises){}
##### 已知JSONP请求函数实现如下，但同时发送多个请求时容易出错，请分析错误原因，
#### 并在不改变函数签名的前提下调整代码解决问题
 -  题如下 function sendJsonp(url,callback){
        const script=document.createElement('script');
        script.src=url+'?name=fun'
        windows.fun=callback;
        document.body.appendChild(script);
    }