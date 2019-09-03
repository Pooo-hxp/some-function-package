/**
 * 首先起步使用IIFE自动执行函数且传进去window
 * 把定义的函数绑定到window身上，方便调用
 */
(function (window) {
    function FakeAjax() {
    };
    window.FakeAjax = FakeAjax;
})(window);
(function (window) {
    function FakeAjax() {
    }
    FakeAjax.prototype = {
        /**
         * 首先定义一个send方法用来接收参数
         *  三元表达式判断数据请求的类型是post还是get
         * get：遍历数据先转为数组再利用join化为字符串
         * 再通过字符串拼接更新请求地址
         * post：直接把数据以键值对形式保存到formdata对象中
         */
        send: function (parameter) {
            console.log(parameter);
            var formData = new FormData();
            parameter.type.toLowerCase() == 'post' ? (function () {
                for (var pro in parameter.data) {
                    formData.append(pro, parameter.data[pro]);
                }
            })() : (function () {
                var arr = [];
                for (let pro in parameter.data) {
                    var str = pro + '=' + parameter.data[pro];
                    arr.push(str);
                }
                var canshu = arr.join('&');
                parameter.url += parameter.url.indexOf('?') == -1 ? '?' + canshu
                    : '&' + canshu;
                /**打印出地址方便查看地址拼接情况 */
                console.log('预拼接参数' + canshu);
                console.log('参数拼接完成' + parameter.url);
            })();
    /**
     * 创建XMLHttpRequest对象
     * 发送请求和监听对应状态码
     * 接收到数据并通过JSON.parse()解析成json对象（键值对形式）
     * json.stringify()是将json对象转化为字符串
     */
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                parameter.success(JSON.parse(xhr.responseText));
            }
        }
        // xhr.readyState==4?xhr.status==200?send.success(JSON.parse(xhr.responseText));
    };
    xhr.open(parameter.type, parameter.url, true);
    parameter.type.toLowerCase == 'get' ? xhr.send(null)
        : (xhr.send(formData));
    console.log(formData)
        }
    }
    window.FakeAjax = FakeAjax;
})(window)