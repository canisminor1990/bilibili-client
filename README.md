# Bilibili Mini-Client

![](https://github.com/canisminor1990/bilibili-client/blob/master/doc/preview-0.png?raw=true)

[![](https://img.shields.io/github/release/canisminor1990/bilibili-client.svg)](https://github.com/canisminor1990/bilibili-client)
[![](https://img.shields.io/github/downloads/canisminor1990/bilibili-client/total.svg)](https://github.com/canisminor1990/bilibili-client/releases)

📺 可以摸鱼的 Bilibili Mini-Client # 支持Mac/Win

## Features

- [x] Mini窗口
- [x] 置顶功能
- [x] 无边框播放器
- [x] 分P支持
- [x] Mac/Win客户端
- [ ] 快捷键
- [ ] ...

## Download

点击下方按钮前往releases，下载最新版 `bilibili.app.zip`

[![](https://img.shields.io/badge/bilibili-download-ff69b4.svg?style=for-the-badge)](https://github.com/canisminor1990/bilibili-client/releases)

## Preview

![](https://github.com/canisminor1990/bilibili-client/blob/master/doc/preview-1.png?raw=true)
![](https://github.com/canisminor1990/bilibili-client/blob/master/doc/preview-2.png?raw=true)
![](https://github.com/canisminor1990/bilibili-client/blob/master/doc/preview-3.png?raw=true)

## ChangeLog

|Date|Versiton|Changelog|
|---|---|---|
|2018.1.4|v1.0.2|📺 调整样式/修复动态bug/重构preload结构|
|2018.1.3|v1.0.1|📺 添加动态/兼容番剧/修复分P等bug|
|2018.1.2|v1.0.0|📺 Early Access|

## Develop

`electron` `react` `dva` `roadhog` `webpack`

- [dva-boilerplate-electron](https://github.com/sorrycc/dva-boilerplate-electron)
- [Electron 架构](https://github.com/sorrycc/blog/issues/13)

### Directory Structure

```js
+ dist            // pack 完后的输出，.dmg, .exe, .zip, .app 等文件
+ build           // icon.icns, icon.ico
+ app             // 用于 pack 的目录
  + dist          // main/preload 打包完放这里
  + assets        // 字体、图片等资源文件
  + pages         // 存放页面
  - package.json  // 生产依赖，存 dependencies
+ src             // 源码
  + main          // main
  + renderer      // renderer
  + preload       // webview部分的preload
- package.json    // 开发依赖，存 devDependencies
```

### Dev

> 因为采用 [Two-Package.json Structure](https://www.electron.build/tutorials/two-package-structure)，需要安装二次依赖

```bash
# 窗口一：watch roadhog => pages / webpack => main
$ yarn dev
# 窗口二：start electron
$ yarn start
```

### Build

```bash
$ yarn build
# MacOS
$ yarn pack:osx
# Windows
$ yarn pack:win
```

### Pack

> issue: 目前使用yarn安装依赖，pack后会出现丢包，npm i 无此问题 🤔 ... [link](https://github.com/electron-userland/electron-packager/issues/774)

```bash
# pack:osx && pack:win
$ yarn pack
```

## License

- [MIT](https://tldrlegal.com/license/mit-license)

## Copyright

- **Author:** [canisminor1990](https://github.com/canisminor1990)
- **QQ:** 4007338
- **Email:** <i@canisminor.cc>

