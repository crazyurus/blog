# 个人网站

这是一个基于 `Next.js` 创建的个人网站，使用了服务端渲染（SSR）

https://crazyurus.cn

## 主要功能

- 博客：数据来源于掘金
- 仓库：数据来源于 GitHub
- 音乐：数据来源于网易云音乐

## 配置

你可以通过修改 `.env` 文件更改配置

- `NEXT_PUBLIC_DEFAULT_TITLE` 站点默认标题
- `NEXT_PUBLIC_GITHUB_USERNAME` GitHub 用户名
- `NEXT_PUBLIC_JUEJIN_ID` 掘金用户 ID
- `NEXT_PUBLIC_NETEASE_MUSIC_PLAYLIST_ID` （可选）网易云音乐歌单 ID
- `NEXT_PUBLIC_ZHIHU_USERNAME` （可选）知乎用户名

## 可用脚本

在这个项目中，你可以使用：

### `pnpm run start`

使用开发模式运行你的项目，可打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看。当文件修改时页面会自动更新

### `pnpm run build`

使用生产模式构建你的项目，产物在 `dist` 目录下，构建时我们会对产物进行优化以拥有更好的性能，构建产物中的文件名均有 hash 值，并对内容进行了压缩。
