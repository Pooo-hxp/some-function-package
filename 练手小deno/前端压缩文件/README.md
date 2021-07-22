## `# JSZip`库
- **`jszip`** 是一个集成zip文件创建、读取和编辑功能的`JavaScript`库
    
###  起步
- 常规使用
```javascript
npm install jszip
```
 - CDN使用
   - 如果为了方便先熟悉和调试，也可以引入猫云CDN
   -  `CDN` 👉[点击](https://www.bootcdn.cn/) ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95c7cc080a954ca1aae8021a13c1aad5~tplv-k3u1fbpfcp-watermark.image)
```
   <script src="https://cdn.bootcdn.net/ajax/libs/jszip/3.6.0/jszip.min.js"></script>
   <script src="https://cdn.bootcdn.net/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
```
###  上手使用
   #### 首先创建一个文件上传的控件
   ```javascript
     <span>选择文件:</span><input type="file" id="fileID" /> <hr>
     <button onclick="toZip()" >压缩选择的文件并保存</button>
   ```
   #### 获取当前上传的文件对象
   ```javascript
      var file = document.getElementById("fileID");
      console.log(file.files[0]);
   ```
  ![fileInfo.PNG](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45247beffea6478bb550432cb380bcd2~tplv-k3u1fbpfcp-watermark.image)
  #### 把当前文件信息传入JSzip实例中
  ```javascript
      var zip = new JSZip();
      /**
       * zip.file(params1,params2);
       * 注意：
       * @params1 为当前操作的文件，也可新建
       * @params2 为文件的内容，也可新补充 
       * @params2 若是自己新补充内容，则新生成的压缩文件中，内容会被覆盖（不影响原文件）
      */
      zip.file(file.files[0].name, '被修改啦~~~');
  ```
![updateTxt.PNG](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4774089002d843638acf2d549a889476~tplv-k3u1fbpfcp-watermark.image)
 #### 存储当前文件并选择是否压缩
 ```JavaScript
     /**
     *  zip.generateAsync()
     *  compression ：选择是否压缩 
     *              STORE 不压缩（默认）
     *              DEFLATE：压缩
     * compressionOptions：配置压缩等级
    */
    zip.generateAsync({
       type: "blob",
       compression: "DEFLATE", 
       compressionOptions: {
          level: 5 
       }
    }).then(function (content) {
       saveAs(content, 'newZip.zip');
    });
 ```
 #### 获取压缩文件二进制编码转文件
 ```JavaScript
    var content = "拿到接口返回的压缩包二进制数据,解压后还原";
   zip.loadAsync(content).then(function (zip) {
      new_zip.file("getContent.txt").async("string");
   });
 ```
 #### 完整项目代码
 ```javascript
<html>
<head>
   <title>客户端压缩文件测试</title>
   <script src="https://cdn.bootcdn.net/ajax/libs/jszip/3.6.0/jszip.min.js"></script>
   <script src="https://cdn.bootcdn.net/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
</head>
<body>
   <span>选择文件:</span><input type="file" id="fileID" />
   <hr>
   <button onclick="toZip()">压缩选择的文件并保存</button>

   <body>
      <script>
         function toZip() {
            var file = document.getElementById("fileID");
            var zip = new JSZip();
            zip.file(file.files[0].name, file.files[0]);
            zip.generateAsync({
               type: "blob",
               compression: "DEFLATE", 
               compressionOptions: {
                  level: 5 
               }
            }).then(function (content) {
               saveAs(content, 'newZip.zip');
            });
            if (false) {
               var content = "拿到接口返回的压缩包二进制数据,解压后还原";
               zip.loadAsync(content).then(function (zip) {
                  new_zip.file("getContent.txt").async("string");
               });
            }
         }
      </script>
</html>
 ```
- 支持各种场景下的应用，具体可查看官方介绍     
- 更多功能介绍  👉[点击](https://stuk.github.io/jszip/documentation/examples.html) 
