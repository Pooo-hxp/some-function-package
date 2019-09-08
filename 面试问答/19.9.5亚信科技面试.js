/**
 * 行内元素：和其它元素在同一行上
 * 元素宽/高及顶部/底部边距不可设置
 * 元素宽度为包含内容宽度不可改变
 * a、big、br、code、em、i、img、input
 * small、span、strong、label、q(短引用)
 */
/**
 * 块级元素：每个块级元素都从新一行开始
 * 元素宽/高及顶部/底部边距可自定义
 * 元素默认情况下和它父元素宽度一致（可更改）
 * div、dl、form、h系列、menu、p、pre、ul、ol
 */
/**
 * 空元素：在HTML中，没有内容
 * br、hr、input、img、link
 */
/**
 * 补充：默认情况下
 * 块级元素 display：block；
 * 行内元素 display：inline;
 * 行内块状元素display：inline-block;
 * 常用行内块状元素img input
 */
/**
 * display有哪些常用值并说明作用？
 * none：此元素不会被显示
 * block：此元素以块级元素展示，前后有换行符
 * inline:默认值，以内联元素显示，无前后换行符
 * inline-block:行内块级元素
 * table：此元素以块级表格来显示
 */
/**
 * position的几种定位？
 * static:默认值，没有定位;
 * relative:相对定位，相对于其原先所占的位置为基准进行偏移；
 * absolute:绝对定位，相对于第一个非默认定位以外的父元素进行定位；
 * fixed：固定定位，相对于浏览器窗口进行定位，且不会随屏幕滚动；
 */
/**
 * 谈谈盒子模型？
 * 盒子模型有两种，W3C标准盒子模型和IE的怪异盒子模型
 * W3C定义的标准盒模型包括margin、border、padding、content
 * 标准盒模型中元素的width=content；
 * IE怪异盒模型大致与标准盒模型相同，区别在于
 * 怪异盒模型中元素的width=content+padding+border
 * 在CSS3中通过box-sizing:content-box|border-box|inherit
 * box-sizing: inherit;//规定应从父元素继承 box-sizing属性的值。
 * 即box-sizing属性可以指定盒子模型种类，
 * content-box指定盒子模型为W3C（标准盒模型)
 * border-box为IE盒子模型（怪异盒模型）
 */
/**
 * H5和CSS3的新特性？
 * * * H5中新特性 * * * * 
 * 语义化标签：
 * header、footer、nav、section、aside、article
 * 音频视频：audio，video
 * 绘制：canvas
 * 拖拽：draggable 设置为true 可以被拖拽
 * 本地存储：
 *    localStorage - 没有时间限制的数据存储；
 *    sessionStorage - 针对一个 session 的数据存储，
 *    当用户关闭浏览器窗口后，数据会被删除；
 * 新事件：onresize、ondrag、onscroll、onmousewheel、onerror、onplay、onpause
 * * * CSS3中新特性 * * * *
 * 选择器：
 * :last/first-child选择元素首/尾子代
 * :nth-child(num/even/odd)选择指定/偶数/奇数
 * :checked选择每个被选中的元素
 * ::selection选择被用户选取的元素部分
 * ***伪类*** *
 * a:link{color:skyblue}选择未访问的链接
 * a:hover{color:skyblue}鼠标移动到链接上
 * a:avtive{color:skyblue}选中的链接
 * ***背景和边框*** *
 * background-size:规定背景图尺寸
 * background-origin:规定背景图片的定位区域
 * 背景图片可以放置于 content-box、padding-box 或 border-box 区域
 * border-radius:圆角
 * box-shadow/text-shadow:阴影
 * border-image:边框图片
 * translate():元素从当前位置移动，根据给定的left(x坐标)和top(y坐标)参数
 */
/**
 * 谈谈浮动和如何清除浮动？
 * 浮动就是通过给元素fload属性使其脱离文档流
 * 清除浮动：为解决高度坍塌
 * 因为子元素浮动，使父元素高度无法被撑起，造成高度坍塌
 * 这是需在父元素身上设置overflow:auto/hidden就可以了
 * 另一种清除浮动的方法是在需清除浮动元素的前面增加空div
 * 设置样式clear：both;
 */
/** 
 * 谈谈ajax中的get和post方法
*/