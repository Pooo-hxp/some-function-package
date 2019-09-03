/**
 * 使用面向对象编程思想
 * 自封装一个ajax通信方法
 */
(function(window){
    function FakeAjax(){
    }
        FakeAjax.prototype={
            send:function(parameter) {
                console.log(parameter);
                var formData=new FormData();
                parameter.type.toLowerCase()=='post'?(function(){
                    for(var pro in parameter.data) {
                        formData.append(pro,parameter.data[pro]);
                    }
                })():(function(){
                    var arr=[];
                    for(let pro in parameter.data){
                        var str=pro+'='+parameter.data[pro];
                        arr.push(str);
                    }
                    var canshu=arr.join('&');
                    parameter.url+=parameter.url.indexOf('?')==-1?'?'+canshu
                    :'&'+canshu;
                    /**打印出地址方便查看地址拼接情况 */
                    console.log('预拼接参数'+canshu);
                    console.log('参数拼接完成'+parameter.url);
                })();
                var xhr=new XMLHttpRequest();
                xhr.onreadystatechange=function() {
                    if (xhr.readyState==4) {
                        if (xhr.status==200) {
                            parameter.success(JSON.parse(xhr.responseText));
                        }
                    }
                    // xhr.readyState==4?xhr.status==200?send.success(JSON.parse(xhr.responseText));
                };
                xhr.open(parameter.type,parameter.url,true);
                parameter.type.toLowerCase=='get'?xhr.send(null)
                :(xhr.send(formData));
                console.log(formData)
            }

        }
    window.FakeAjax=FakeAjax;
})(window)