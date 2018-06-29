# WebpackDemo
我的第一个前端项目

需要安装node.js

node.js是什么？

是一个JS运行时环境（简单理解为解析执行js代码），在node这个js执行环境中为js提供了一些服务器级别的API(读写文件、网络通信、http服务等)

npm是什么？ node pagekage manange,是随node.js一起安装的包管理工具。最近版本的node.js已经集成npm. "npm -v"命令查看自己是否安装npm

使用npm安装模块

npm安装Node.js模块语法  npm install <module name> .npm的包安装分本地安装全局安装，这里不进行扩展，感兴趣自己去查一下吧。
  
package.json文件干什么的？

定义包的属性。dependencies - 依赖包列表. 如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下.
package.json，可以通过"npm init"命令生成。
  
less是什么？

css扩展语言。也是用来定义样式的。像android里面的style,或者theme
 
es是什么？

ECMAScript和JavaScript的关系是，前者是后者的规格，后者是前者的一种实现。一般来说，这两个词是可以互换的。es它规定了语言的组成部分：语法、类型、语句、关键字、保留字、操作符、对象

React 是什么？

是一个Js框架。React主要用于构建UI，核心思想: 通过构建可复用组件来构建用户界面。react几个重要的概念：Components 组件 ，State 和 Render

JSX 是什么？

react定义的一种类似于XML的JS扩展语法: XML+JS。简单理解在js中直接使用html标签语法。

webpack是什么？

WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。通过配置文件使用webpack.  配置文件：webpack.config.js。使用webpack-dev-server构建本地服务器。
loaders是webpack比较重要的概念。不同格式的文件，用不同的loaders处理。


# 下载代码
git clone 仓库地址
# 安装依赖
npm install
# 打包
npm run start
# 开发环境启动
npm run b



es是什么？
