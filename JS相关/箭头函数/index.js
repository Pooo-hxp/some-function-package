/**
 * 箭头函数有两个方面的作用：更简短的函数并且不绑定this。
 */

let elements=[
    'abcde',
    'bcef',
    'efg',
    'fg'
]
// 1、更简短的函数
elements.map((element)=>{
    console.log(element.length);
})
/**箭头函数只有一个参数时，可以省略参数的括号 如下：*/
elements.map(element=>{
    console.log(element.length);
})
/**当箭头函数只有一个‘return’时，可以省略return关键字以及方法的花括号 如下：*/
elements.map(element=>console.log(element.length));
// 2、不绑定this
/**箭头函数出现之前，每个新定义的函数都有它自己的 this值 
 * 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this
*/
function Person() {
    // Person() 构造函数定义 `this`作为它自己的实例.
    this.age = 0;
    setInterval(function growUp() {
      // 在非严格模式, growUp()函数定义 `this`作为全局对象, 
      // 与在 Person()构造函数中定义的 `this`并不相同.
      //所以此时打印出的结果为NaN
     console.log(this.age++); 
    }, 1000);
  }
  var p = new Person();
  /**
   * 可以使用备份this，来传递this值分配给封闭的变量
   *  */
  function Person() {
    this.age = 0;
    var that=this;
    setInterval(function growUp() {
    //此时正常隔时打印
     console.log(that.age++); 
    }, 1000);
  }
  var p = new Person();
  /**
   * 也可以使用箭头函数来
   */
  function Person() {
    this.age = 0;
    setInterval(()=> {
        //此时this的指向正确，正常打印
     console.log(this.age++); 
    }, 1000);
  }
  var p = new Person();