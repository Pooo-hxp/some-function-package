## `# FileReader`对象
- **`FileReader`** 对象允许Web应用程序异步读取存储在用户计算机上的文件
    
###  文件内容读取样例
```javascript
<div>
  上传文件 ： <input type="file" name="file" id="fileId" onchange="read(event)"/>
</div>
<textarea id="fileTxt">  显示文本内容  </textarea>
  function read() {
    /**
     * file身上的属性
        * lastModifiedDate：文件最后修改时间
        * name：文件名
              * GBK 汉字2字节
              * UTF8 汉字3字节
        * size：文件字节大小
        * type：文件类型
    */
    var file = event.target.files[0];
    var reader = new FileReader();
    //开始读取指定的文件中的内容。一旦完成，result属性中将包含一个字符串以表示所读取的文件内容。
    reader.readAsText(file, "UTF-8");//读取文件 
    reader.onload = function (evt) {
      var fileString = evt.target.result;
      document.getElementById('fileTxt').innerHTML = fileString;
    }
  }
```

###  `new FileReader()` 实例简单介绍
   - `FileReader.onloadstart`事件
       - 该事件在读取操作开始时触发
   - `FileReader.onload`事件
        - 该事件在文件读取操作完成时触发。
   -  `FileReader.onloadend`事件
        - 该事件在读取操作结束时，无论成功还是失败都会触发触发
   - `FileReader.readAsText()`、`FileReader.readAsBinaryString()`和`FileReader.readAsDataURL()`方法
       - 读取指定的`Blob`中的内容，`result`属性中将包含读取的文件内容。
           - `readAsText()`的结果以字符串形式展示
           - `readAsBinaryString()`以原始二进制展示
           - `readAsDataURL()`以Base64字符串以表示
   
- 其他详细用法，请参考 `MDN` 👉[点击]( https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader) 
## `# ActiveXObject`对象

### `FileReader`对象固然好用，但是只支持到IE10+，对于低版本IE只能借助 `ActiveXObject`
-  由于`ActiveXObject` 是微软提供的，因此只支持IE内核的浏览器，也可用它检验当前浏览器是否为IE
### 低版本IE文件内容读取示例
```javascript
<div>
  文件路径： <input type="input" id='URL' placeholder="请输入需读取的文件路径" />
  <button onclick="getTxt()">获取</button>
 <textarea id="fileTxt">  显示文本内容  </textarea>
</div>
  function getTxt() {
    if (window.ActiveXObject || "ActiveXObject" in window){
		    return true;
	 }else{
                 alert('该浏览器不支持ActiveXObject')
	    	return false; 
	  }
    var ActiObj = new ActiveXObject("Scripting.FileSystemObject");
    var url=  document.getElementById('URL').value;
    var file = ActiObj.OpenTextFile(url, 1);//文件路径
    var txt = file.ReadAll();
    document.getElementById('fileTxt').innerHTML = txt;
  }
```
- 完整实例文件，可参考 `Git` 👉[点击](https://github.com/Pooo-hxp/some-function-package/blob/master/%E7%BB%83%E6%89%8B%E5%B0%8Fdeno/%E8%8E%B7%E5%8F%96%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E5%86%85%E5%AE%B9/index.html) 
## 可能会遇到的问题
### 显示、Automation服务器不能创建对象
   - 如： 
   ![config.PNG](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75e3fd5f1231427ea2b9c7b1b4d0d960~tplv-k3u1fbpfcp-watermark.image)
   - 这是由于IE浏览器中的安全限制造成的
   - 解决：检查`IE->internet选项->安全->自定义级别`找到`ActiveX控件`进行修改启用即可
   ![安全.PNG](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34b1215a805c48c4a4bef4eee445d3ef~tplv-k3u1fbpfcp-watermark.image)
   - 疯狂吐槽：之前有个旧设备XP系统装的IE8,以为ActiveXObject问题，结果排查半天是indexOf不支持。
