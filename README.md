# 邱梓轩 · Zixuan Qiu

中英双语个人学术主页与完整简历。页面默认展示中英对照，也可切换为单一语言。
Academic homepage and full CV with paired translations and optional Chinese-only and English-only views.

## Preview / 预览

Open `index.html` directly or serve this directory with `python3 -m http.server 8000`.

直接打开 `index.html`，也可运行 `python3 -m http.server 8000` 进行本地预览。

## GitHub Pages

Place the files in the root of the Pages repository. In **Settings → Pages**, select **Deploy from a branch**, then select **main** and **/(root)**.

将站点文件放到 Pages 仓库根目录，在 **Settings → Pages** 中选择 **Deploy from a branch**，分支和目录设为 **main** 与 **/(root)**。

## Edit / 更新

Edit the paired entries in `index.html`. The Chinese CV uses the source document’s font families and point sizes, with fallbacks for devices that do not have the source fonts. Keep each entry’s `lang` attributes and `translation` classes so the language controls continue to work.

中文简历采用 Word 原字体名称和字号，缺少对应字体的设备会使用系统替代字体。在 `index.html` 中更新对应的中英文条目，并保留 `lang` 属性和 `translation` 类，以便切换语言。
