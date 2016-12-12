# webpack-seed-v2

## 项目介绍
fork 自 [Array-Huang/webpack-seed](https://github.com/Array-Huang/webpack-seed) v2.0
和 [Nutlee/webpack-seed](https://github.com/Nutlee/webpack-seed) v1.2.2

并参照详细修改说明请看个人博客修改
[关于前端工程化的思考及《webpack多页应用架构系列》mock开发环境改造](http://nutlee.github.io/2016/10/24/%E5%85%B3%E4%BA%8E%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E7%9A%84%E6%80%9D%E8%80%83%E5%8F%8A%E3%80%8Awebpack%E5%A4%9A%E9%A1%B5%E5%BA%94%E7%94%A8%E6%9E%B6%E6%9E%84%E7%B3%BB%E5%88%97%E3%80%8Bmock%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%94%B9%E9%80%A0/)

## 修改

* 增加本地 3000 端口开启 server 做 mock 服务器，当前生产环境修改为在 mock 服务器下热更新

* 增加 mockjs ，接口模拟数据

* 修改原使用 supervisor 服务器配置文件监控，因为如果改动服务器会重启，直接使用webpack-dev-server启动

* 分离 url 配置

* 修复原作者 dll.js 未压缩的问题

尚存问题

* 由于使用的 `html-webpack-plugin` 拼接出来的 HTML，所以所有的 HTML 并没有监控，需要手动在浏览器刷新。

* `html-webpack-plugin` 动态加载 chunk 并打上了 hash，导致每次任意一个 chunk 有改动，所有的 chunk 文件都会打上相同的 hash，对严格控制版本的情况不太合适。

## 原项目介绍
本项目是一个利用webpack架构的**web app**脚手架，其特点如下：
- 多个项目可以共用同一套架构/基础设施。
- 更适合**多页应用**。
- 既可实现全后端分离，也可以生成后端渲染所需要的模板。
- 引入layout和component的概念，方便多页面间对布局、组件的重用，妈妈再也不用担心我是选SPA呢还是Iframe了，咱们都！不！需！要！
- 编译后的程序不依赖于外部的资源（包括css、font、图片等资源都做了迁移），可以整体放到CDN上。
- 已整合兼容IE8+的[跨域方案](https://github.com/jpillora/xdomain)。
- 整合Bootstrap3(利用webpack按需打包)及主题SB-Admin，但其实换掉也很简单，或者干脆不用CSS框架也行。
- 不含Js框架（jQuery不算框架，谢谢）。在我原本的项目中，是用avalon2作为Js框架的，但考虑到脚手架本身并不需要Js框架，同时我也希望这个项目保持精简，因此决定剔除掉avalon2的部分。
- 整合[iconfont](http://www.iconfont.cn/)作为字体图标方案，需要什么图标就自己上iconfont那打包下载下来，替换掉`core/iconfont`内的文件。


## 使用说明
- 全局安装webpack和webpack-dev-server，如果已经装过那可以跳过这一步

```bash
$ npm install --global webpack webpack-dev-server
```

- 本项目使用包管理工具NPM，因此需要先把本项目所依赖的包下载下来：

```bash
$ npm install
```

- 进入到示例项目**example-admin-1**目录里（与项目相关的npm scripts都定义在项目内部的`package.json`里了）

```bash
$ cd ./example-admin-1
```

- 编译程序，生成的所有代码在`build`目录内。

```bash
$ npm run build # 生成生产环境的代码。用npm run watch或npm run dev可生成开发环境的代码
```

- 启动服务器，推荐直接使用webpack-dev-server

```bash
$ npm run start
```

- 打开浏览器，在地址栏里输入`http://localhost:8080`，Duang！页面就出来了！

## CLI命令(npm scripts)

### 在具体项目的目录(如`example-admin-1`目录)中执行的CLI命令
| 命令            | 作用&效果          |
| --------------- | ------------- |
| npm run build   | 根据`webpack.config.js`，build出一份生产环境的代码 |
| npm run dev     | 根据`webpack.dev.config.js`，build出一份开发环境的代码 |
| npm run watch   | 在`npm run dev`的基础上添加`-- watch`，实时监控源文件，建议开发时使用这项 |
| npm run start   | 开启webpack-dev-server，然后就可以在 http://localhost:8080/ 查看成品了 |
| npm run profile | 显示编译过程中每一项资源的耗时，用来调优的 |


### 在基础设施/架构核心(`core`目录)中执行的CLI命令
| 命令            | 作用&效果          |
| --------------- | ------------- |
| npm run dll     | 生成Dll文件，每次升级第三方库时都需要重新执行一遍 |

## 更新日志

基于[Array-Huang/webpack-seed](https://github.com/Array-Huang/webpack-seed) v2.0
和 [Nutlee/webpack-seed](https://github.com/Nutlee/webpack-seed) v1.2.2

