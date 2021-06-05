## 虚拟机安装过程
### `VM ware`下载过程
- 获取`VM ware`官方下载地址 https://www.vmware.com/products/workstation-pro.html

    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0259989ff3b4b66bcaf85f026a5bb6b~tplv-k3u1fbpfcp-watermark.image)

- 选择适合自己操作系统的版本,进行下载即可
    
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f785d226a2da4d078bd527f1e150d8d5~tplv-k3u1fbpfcp-watermark.image) 
### `VM ware`安装与激活
   - 软件默认安装为C盘，`建议自定义路径`
   ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71abf3e8aa62431e8bbb110230835d69~tplv-k3u1fbpfcp-watermark.image)
   - 安装完成后，点击桌面`VM ware`快捷图标打开软件
   - 系统提示会提示试用期30天或永久激活，激活密钥自行baidu获取
   ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/016b7a1134004d3eafcbb49ed63d2e1e~tplv-k3u1fbpfcp-watermark.image)
### `VM ware`新建虚拟机
   - 注：*需要提前下载系统镜像文件*
   -   👉 三击复制下方连接，直接 🛩下载 **Win 10** 系统镜像 
   ```javascript
ed2k://|file|cn_windows_10_business_editions_version_1909_updated_dec_2019_x64_dvd_262ac8af.iso|5301471232|FD9D7DD90D16FA14A682AEF49F8E712B|/
   ```
   - 如果想下载**win7 8 , XP , Linux**等，👉[点击](https://msdn.itellyou.cn/) 选择适合自己的
   
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bed239599c4946e7a1029903998a7505~tplv-k3u1fbpfcp-watermark.image)
   - **Ctrl+N 或者点击新建虚拟机,进行虚拟机创建**
   
   ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a8ef7eb3aae4428a72a52302f4f75ed~tplv-k3u1fbpfcp-watermark.image)
   
   -  **选择映像文件iso,文件目录选择提前下载好的系统镜像文件**
    
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f19f8821014049fc80b528dc2f144c00~tplv-k3u1fbpfcp-watermark.image)

 - 进行操作系统秘钥激活，可自己通过网络获取
 
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55aa0a2310f24dd88b39421dca25263e~tplv-k3u1fbpfcp-watermark.image)
 - 输入秘钥激活后，进行存储路径配置
 
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd1e0581925c472090f3ede98dee62d4~tplv-k3u1fbpfcp-watermark.image)
  - 然后进行虚拟机磁盘分配（逻辑空间，根据实际大小占用本地磁盘）
  
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe280c64eca9417c88aee4d4bc96281d~tplv-k3u1fbpfcp-watermark.image)
  - 再根据自己电脑硬件情况，对虚拟机内存及处理器进行分配
  
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/370ea68d4bba46f79a5040e1e46ee6d3~tplv-k3u1fbpfcp-watermark.image)
> 然后自动开启虚拟机
## 虚拟机的使用中问题解决
### `VM ware`中系统安装    
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51a947d678bc4128aed6593b7e26cd34~tplv-k3u1fbpfcp-watermark.image)
### `VM ware`中虚拟机：蓝屏
   - 如果首次进入是boot manager界面，如下图所示
   
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d6b1309861e848998cf2047bfcfeb7b0~tplv-k3u1fbpfcp-watermark.image)
   > 解决方案：虚拟机设置中高级->固件类型->改为BIOS，重启虚拟机
    
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8614fcc59e594cb69391485e08b1a4d6~tplv-k3u1fbpfcp-watermark.image)
### `VM ware`虚拟机：无人参与应答文件包含的产品秘钥无效
   - 如果出现秘钥无效导致无法进入系统的问题
    
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0964ee93f91447ca61467665f2f87b3~tplv-k3u1fbpfcp-watermark.image)
> 解决方案：虚拟机右下角，左往右第三个软盘项，右键断开连接即可
### `VM ware`虚拟机：本地文件与虚拟机文件无法相互拷贝
   - 虚拟机VMware Tools 为灰色，无法安装
 
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69f70d4b60884534a2a13e7cfc6deef7~tplv-k3u1fbpfcp-watermark.image)
   > 解决方案1：设置 **CD/DVD、CD/DVD2、软盘** 为自动检测
    
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c21fcdd001314f05af7577c6270efd2c~tplv-k3u1fbpfcp-watermark.image)
  > 解决方案2：设置 **CD/DVD**连接为ISO映像文件
   - 重启虚拟机，此时打开我的电脑中，会出现VMware Tools文件,点击安装
  
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2789e3afc98457ebc503de7d892ed19~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df075218ea4a49ebb9e42d1da440b5b4~tplv-k3u1fbpfcp-watermark.image)