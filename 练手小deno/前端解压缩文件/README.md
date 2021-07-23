##### 前言：公司项目中使用JSZip做一些PDF文件转存类的工作，趁有时间先简单熟悉下。
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
     * compressionOptions：配置压缩等级 1-9 由低到高
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
 #### 完整压缩示例代码
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
               var content = "这里可以拿到接口返回的压缩包二进制数据,还原后解压";
               zip.loadAsync(content).then(function (zip) {
                  new_zip.file("getContent.txt").async("string");
               });
            }
         }
      </script>
</html>
 ```
#### 解压缩文件并展示
   - 利用`jszip.loadAsync`读取压缩包中的文件
   ```javascript
      var  base = zip.file(zip.files[key].name).async('string') 
         * 可以在层级中检测自己想要的文本类型
         * 替换即可：如 docx  jpg png pdf 等
   ```
   - 读取的base内容
   ![readZip.PNG](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2219a98a3fe3436b8ebcc30227790fd4~tplv-k3u1fbpfcp-watermark.image)
   - 利用`zip.generateAsync`解压后保存读的取内容
   ```javascript
      zip.generateAsync({
          type: "blob",
          compression: "STORE",
       }).then(function (content) {
          saveAs(content, 'unzip.txt');
       });
   ```
  - 内容可拿来展示
  ![unPack.PNG](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f3252d3db864d13bc0018ac8326c4a1~tplv-k3u1fbpfcp-watermark.image)
  - 补充：若文本中汉字出现乱码，检查下原文件编码格式
  #### 完整解压示例代码
```html
  <html>

<head>
   <script src="https://cdn.bootcdn.net/ajax/libs/jszip/3.6.0/jszip.min.js"></script>
   <script src="https://cdn.bootcdn.net/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
</head>
<body>
   <span>选择文件:</span><input type="file" id="fileID" /><hr>
   <button onclick="readZip()">解压选择的文件并展示</button><br><br>
   <textarea id="fileTxt">  显示文本内容  </textarea>
</body>
<script>
         function readZip() {
            var file = document.getElementById("fileID");
            const zipFile = file.files[0]
            const jszip = new JSZip()
            var dataList=[];
            jszip.loadAsync(zipFile).then((zip) => { // 读取zip
               for (let key in zip.files) { // 循环判定是否有层级
                  if (!zip.files[key].dir) {
                     /**
                      * 可以在层级中检测自己想要的文本类型
                      * 替换即可：如 docx  jpg png pdf 等
                     */
                     if (/\.(txt)$/.test(zip.files[key].name)) { 
                        var  base = zip.file(zip.files[key].name).async('string') 
                        // uint8array base64 string
                        // 可以选择想要的类型输出，比如解图用base64，文本string等
                        base.then(res => {
                           dataList.push({
                              fileName: zip.files[key].name,
                              type: 'text',
                              content: res
                           });
                           //使用dataList 利用  zip.file()生成新文件也可以
                           document.getElementById('fileTxt').innerHTML = res;
                        })
                        zip.generateAsync({
                        type: "blob",
                        compression: "STORE", 
                     }).then(function (content) {
                        saveAs(content, 'unzip.txt');
                     });
                     }
                  }
               }
            })
         }
  </script>

</html>
  ```
- 还有支持各种场景下的API，具体可查看官方介绍     
- 更多功能介绍  👉[点击](https://stuk.github.io/jszip/documentation/examples.html) 
