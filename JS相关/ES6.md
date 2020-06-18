### 查看官方文档，对ES6进行一次汇总，方便自己回头复习。    
1、  ```let```只在代码块中有效，外部无法读取和引用，且不存在变量名提升,只能声明一次
```JavaScript
{
    let a=0;
    console.log(a);//0
}
a;//报错：a is not defined
```
* 变量 i 是用 var 声明的，在全局范围内有效，所以全局中只有一个变量 i, 每次循环时，setTimeout 定时器里面的 i 指的是全局变量 i ，而循环里的十个 setTimeout 是在循环结束后才执行，所以此时的 i 都是 10。

* 变量 j 是用 let 声明的，当前的 i 只在本轮循环中有效，每次循环的 j 其实都是一个新的变量，所以 setTimeout 定时器里面的 j 其实是不同的变量，即最后输出12345。
```
for (var i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i);
  })
}
// 输出十个 10
for (let j = 0; j < 10; j++) {
  setTimeout(function(){
    console.log(j);
  })
}
// 输出 0123456789
```
***
2 、 ```const```声明一个只读变量，不可改变，且声明必须初始化数据，否则报错
```
const PI = "3.1415926";
PI  // 3.1415926

const MY_AGE;  //报错    
```
***
3、解构赋值有两部分参与
* 结构的源：解构赋值表达式的右边部分；  
* 结构的目标：结构赋值表达式的左边部分；
##### 数组模型的解构
```javascript
一、基本型
 let [a, b, c] = [1, 2, 3];
   // 此时 a=1,b=2,c=3
二、嵌套型
  let [a, [[b],c]] = [1, [[2], 3]];
   // 此时 a=1,b=2,c=3
三、忽略型
  let [a, , c] = [1,2,3];
   //此时 a=1,c=3
四、不完全解构型
   let[a=1,b]=[];
   //此时 a=1,b=undefined
五、剩余运算符型
   let[a,...b]=[1,2,3];
   //此时 a=1,b=[2,3]
六、字符串型
  let [a,b,c,d,e,f]='potato';
  //此时 a=p,b=o,c=t......
//ps:一般题目中有不借助临时变量交换两个变量值的题目
 1、利用ES6解构交换
     var a=1,b=2;
     [a,b]=[b,a];
 2、利用数组进行交换
    var a=1,b=2;
    a=[b,b=a][0];
   ```
  ##### 对象模型的解构
  ```javascript
  一、基本型
  let {foo,bar}={foo:'xxx',bar:'yyy'};
  //此时foo='xxx',bar='yyy';
  let {baz:foo}={baz:'ddd'};
  //此时foo='ddd'
  二、可嵌套可忽略
  let {p: [x, {y}]} ={p: ['hello', {y: 'world'}] };
  console.log(x);//hello
  console.log(y);//world
  -----忽略----
  let {p: [x, {  }] } = {p: ['hello', {y: 'world'}] };
console.log(x);//hello
三、不完全解构
let {p:[{y}, x]}={p: [{y:'world'}]};
console.log(x);//undefined
console.log(y);//world
四、剩余运算符型
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
console.log(a);//10
console.log(b);//20
console.log(rest);//{c: 30, d: 40}
五、解构默认值型
let {a: x = 10, b: y = 5} = {a: 3};
console.log(x);//3
console.log(y);//5
  ```