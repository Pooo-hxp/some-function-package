/**
 * params
 * entry->定义编译打包入口文件
 * mode->开发环境
 */
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:"./src/index.js",
    mode:'development',
    plugin:[
        new HtmlWebpackPlugin({})
    ]
}