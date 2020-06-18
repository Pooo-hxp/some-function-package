     function btnclick(){
        let quicktxt=document.getElementById("quicktxt").value;
        let arr=quicktxt.split("");
        let show=document.getElementById("show");
        show.innerHTML=quickSort(arr);
        console.log(quickSort(arr));
    }
    /**JS利用面向对象编程 */
(function(window){
    function quickSort(arr){
        return arr.length<=1?arr:quickSort.prototype.init(arr);
        /* 更改返回值*/
    }
    quickSort.prototype={
        constructor:quickSort,
        init:function(arr){
            this.arr=arr;
           /**找到需快排数组中间的数字的下标*/
            let flag=Math.floor(arr.length/2);
            let key=arr.splice(flag,1);
            /**取出数组项为基准,使用arr[num]方式也能获取*/
            let left=[];
            let right=[];
            for(let i=0;i<arr.length;i++){
                /*数组与基准比较，大在右小在左*/
                arr[i]>key?right.push(arr[i])
                :left.push(arr[i]);
            }
              /* 迭代重复排序并利用数组concat方法进行数据拼接 **/
            return  quickSort(left).concat(key, quickSort(right));
        }
    }
    window.quickSort=quickSort;
})(window) 
/**JS常用写法 */
/**
    function hxp(arr){
        var flag=Math.ceil(arr.length/2);
        var key=arr.splice(flag,1);
        var left=[];
        var right=[];
        for(let i=0;i<arr.length;i++){
            arr[i]>key?right.push(arr[i])
            :left.push(arr[i]);
        }     
        return quickSort(left).concat(key,quickSort(right));
    }
 **/
   