# 万能AI播放器 · 产品发布网站

原创静态产品网站，公开范围仅为本仓库的网站文件，不含软件私有源码、媒体库、运行设置、凭据或记忆。

网站：https://dashizhihuan2018-source.github.io/AIPlayer-website/

软件对应版本：V1.1.2/build18，源码标签 `v1.1.2`，提交 `0104723f6932eabbe91960a9cffaf315a4ab8c1d`。软件仓库：https://github.com/dashizhihuan2018-source/AIPlayer 。网站发布不代表软件版本更新。

## 文件白名单

- `index.html`、`features.html`、`guide.html`、`download.html`、`privacy.html`
- `styles.css`、`media.css`、`site.js`、`.nojekyll`、`.gitignore`、本 README
- `assets/app-icon.png`、`assets/cosmic.jpg`（现有获准品牌素材）
- `release.json`、`QA.md`、`scripts/check.mjs`（公开身份、验收范围和静态检查）
- `assets/demos/` 八份已审查真实界面/实录/导出素材，`media-sources.md` 与 `media-manifest.json`（来源、许可、历史版本与摘要）

网站 V1.1.0 按宣传海报主线“好电影，一搜就有；精彩，一键分享”，依次介绍搜索发现、播放体验与记录分享；GIF是其中一个功能，不是整站主轴。新增九项功能详解、真实截图、两段可手动播放的历史实录和真实导出样例，另展开4K GIF参数。当前参数与历史素材明确区分，不将普通分辨率样例称为4K。使用系统字体，无远端脚本、分析 SDK 或登录；不自动播放。页面脚本只处理校验值复制。演示影片 Coffee Run 依 CC BY 4.0 使用并署名，完整范围见素材说明；未复用私人播放内容或权利不清的搜索封面。

## 维护

从仓库根目录运行 `node scripts/check.mjs`。GitHub Pages 从 `main` 根目录发布；站内资源使用相对路径。安装包保留在软件 GitHub Release，不放入本网站 Git 历史。

只提交已审查白名单文件，使用 GitHub no-reply 提交身份。不要将软件研发历史或本机运行目录复制进来。

## 权利

网站原创部分 © 2026 Nankong，源码公开供查阅，未额外指定许可。品牌素材来自软件已有独立生成资产，其来源见软件 `docs/ASSETS.md`。软件本身保留 AGPL-3.0-or-later，第三方依赖保留各自许可；网站公开不更改软件许可。
