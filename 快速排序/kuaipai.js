     function btnclick(){
        let quicktxt=document.getElementById("quicktxt").value;
        let arr=quicktxt.split("");
        let show=document.getElementById("show");
        show.innerHTML=quickSort(arr);
        console.log(quickSort(arr));
    }
    
    var arr=[1,7,3,4,8,9,10];
    function quickSort(arr){
        return arr.length<=1?arr:hxp(arr);
    }
    function hxp(arr){
        /**找到需快排数组中间的数字的下标*/
        var flag=Math.ceil(arr.length/2);
        /**取出数组项为基准*/
        var key=arr.splice(flag,1);
        var left=[];
        var right=[];
        /**比这个基准小的放左数组，大的放右数组*/
        for(let i=0;i<arr.length;i++){
            arr[i]>key?right.push(arr[i])
            :left.push(arr[i]);
        }
        /*迭代重复排序并拼接**/
        return quickSort(left).concat(key,quickSort(right));
    }
   