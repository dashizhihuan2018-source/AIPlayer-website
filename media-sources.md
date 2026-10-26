# 网站演示素材与版本边界

网站 V1.1.0，2026-10-26。参考既有 Nankong 宣传海报及 R12 视频的内容层次，重新实现网页；不直接复用含第三方电影封面的整张宣传海报或搜索页。

## 真实素材

| 网站文件（assets/demos/） | 来源及准确范围 |
| --- | --- |
| player-real.png | build15 GIF 连续实录第 0 秒原帧，1312×750；真实 UI，不是重绘 |
| gif-settings-real.png | 同一实录第 2 秒原帧；显示 20 FPS / 640 默认档，不是4K输出截图 |
| poster-preview-real.png | build15 海报连续实录第 9 秒原帧；历史六帧时间线预览 |
| gif-operation.mp4 | 原宣传 gif-continuous.mp4 逐字节复制；H.264，1312×750，4.466667秒，无音轨、原速连续实录 |
| poster-operation.mp4 | 原宣传 poster-continuous.mp4 逐字节复制；H.264，1312×750，9.966667秒，无音轨，包含等待过程，未使用压缩等待的剪辑版 |
| gif-export.gif | 原 R12 使用的真实软件导出，1920×804、3帧、约0.73秒；不是4K，也不是上方录像即时成果 |
| gif-export-first.png | 上述 GIF 的既有静态首帧预览，逐字节复制 |
| poster-export.png | 原 R12 使用的真实1200×620六帧时间线海报，逐字节复制；不是当前竖版海报样例 |

原宣传实录已对窗口画面裁切、缩放并静音。本站视频未再剪辑、变速、配音或修改界面；PNG 仅提取指定原帧。网页按容器尺寸显示，不改变下载文件的实际像素。没有把生成图片、旧图或放大截图冒充当前软件4K导出。

## 影片与权利

演示影片：Coffee Run (2020)，导演 Hjalti Hjalmarsson，Blender Studio。

署名：**(CC) Blender Foundation | studio.blender.org**

- [官方项目](https://studio.blender.org/projects/coffee-run/)
- [官方授权说明](https://studio.blender.org/projects/coffee-run/pages/licensing/)
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

影片画面已节选、静音、缩放、截图，或由软件转换为 GIF/拼图。保留作者及许可链接，不暗示 Blender Foundation 支持或认可本产品。官方标志、商标不在影片 CC 授权内；本站选用内容避开片头片尾标志。不因片名出现在软件文件名中主张商标权。

网站原创布局及文字 © 2026 Nankong。软件 UI 的软件许可与上游署名保持不变；品牌图标仍按原项目 assets 说明处理。REA、独立封装或代码重写不能取消第三方版权与许可。

## 当前功能依据

- 软件 v1.1.2 / build18，源提交 0104723f6932eabbe91960a9cffaf315a4ab8c1d。
- GIF 界面：upstream/src/components/desktop/desktop-media-tools.tsx，640/3840 两档，5/10/15/20/25/30 FPS，默认20。
- 原生实现：desktop/NativeMediaTools.swift、desktop/NativePlayer.swift。
- [已有 UHD 与倍速验证](https://github.com/dashizhihuan2018-source/AIPlayer/blob/v1.1.2/docs/VERIFICATION.md)：是既有工程证据，不是本站重新软件回归。
- “重点特色”是产品定位，不主张已完成全行业排他性或专利审查，不写“全网唯一”。

截图、历史实录、当前参数、已有工程验证和用户接受分别记录。网站更新不替换已安装软件、不改变安装包身份。
