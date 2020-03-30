function seleMax(){
    //检测出现频率最高的字符
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