# 万能AI播放器 · 产品发布网站

原创静态产品网站，公开范围仅为本仓库的网站文件，不含软件私有源码、媒体库、运行设置、凭据或记忆。

网站：https://dashizhihuan2018-source.github.io/AIPlayer-website/

软件对应版本：V1.1.2/build18，源码标签 `v1.1.2`，提交 `0104723f6932eabbe91960a9cffaf315a4ab8c1d`。软件仓库：https://github.com/dashizhihuan2018-source/AIPlayer 。网站发布不代表软件版本更新。

## 文件白名单

- `index.html`、`features.html`、`guide.html`、`download.html`、`privacy.html`
- `styles.css`、`media.css`、`site.js`、`.nojekyll`、`.gitignore`、本 README
- `assets/app-icon.png`、`assets/cosmic.jpg`（现有获准品牌素材）
- `release.json`、`QA.md`、`scripts/check.mjs`（公开身份、验收范围和静态检查）
- `assets/screenshots/` 三张本机 V1.1.2/build18 真实截图；`assets/fonts/` 思源宋体真正粗体与 OFL；素材摘要见 `media-manifest.json`

网站 V1.2.0 沿用宣传主线“好电影，一搜就有；精彩，一键分享”，搜索发现 → 观看 → 记录分享，GIF仅为一个功能。参考 PDFMaster 的暖纸、深蓝展示区、朱红强调；标题使用本地思源宋体 CN Bold 700 与 OFL。全部当前配图来自最新版正式 App V1.1.2/build18；旧录屏已退出网站。九项功能详解保留参数与限制，4K设置截图不冒充4K输出。无字体 CDN、分析SDK或登录。Coffee Run 按CC BY4.0署名。网站同步GitHub Pages及既有腾讯云隔离静态路径，不变更App或安装包。

## 维护

从仓库根目录运行 `node scripts/check.mjs`。GitHub Pages 从 `main` 根目录发布；站内资源使用相对路径。安装包保留在软件 GitHub Release，不放入本网站 Git 历史。

只提交已审查白名单文件，使用 GitHub no-reply 提交身份。不要将软件研发历史或本机运行目录复制进来。

## 权利

网站原创部分 © 2026 Nankong，源码公开供查阅，未额外指定许可。品牌素材来自软件已有独立生成资产，其来源见软件 `docs/ASSETS.md`。软件本身保留 AGPL-3.0-or-later，第三方依赖保留各自许可；网站公开不更改软件许可。
