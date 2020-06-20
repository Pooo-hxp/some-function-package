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
                 //把接收到的字符串转化为对象
             }
         }
     }
     xhr.timeout=3000;
     xhr.timeout=function(){
         console.log('请求超时')；
     }
     xhr.open(obj.type,obj.url,true);
     obj.type.toLowerCase()=='get'?xhr.send(null)
     :xhr.send(formdata);
 }
 ```