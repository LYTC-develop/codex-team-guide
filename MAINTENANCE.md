# 教材網站維護

正式網站：https://lytc-develop.github.io/codex-team-guide/

儲存庫：https://github.com/LYTC-develop/codex-team-guide

## 內容方向

首頁只保留八章目錄。主線依序是「開始之前 → 安裝設定 → 差異 → 名詞 → GitHub → 美編實作 → Google Drive 與 Sheets → 建立可重複專案」，每章獨立頁面，附上一章／下一章。不要把進階設定、長篇字典或流程清單堆回首頁。練習應有原始資料、可操作步驟、實際交付物及明確完成標準。

## 檔案與發布

- `README.md`：GitHub 直接閱讀的精簡教材。
- `docs/index.html`：課程目錄。
- `docs/start.html`、`install.html`、`differences.html`、`terms.html`、`github.html`、`example.html`、`google-drive.html`、`project-workflow.html`：八個主線章節。
- `drive-practice/`：第二個範例的虛構採購 Excel、說明檔、教學對話與操作索引；獨立於美編 Repo。
- `docs/downloads/codex-drive-practice.zip`：打包完整 `drive-practice/`，只放四份教學檔。
- `docs/downloads/codex-google-drive-task.txt`：與第七章複製按鈕及 `drive-practice/開始教學.txt` 保持一致。
- `docs/downloads/codex-build-project.txt`：第八章的分階段專案建立教練，內容參照公司美編工作包的市場研究、Doc、Skill、試作與校對順序。
- `docs/extras.html`：財務對帳與操作表單的延伸練習。
- `docs/styles.css`：電腦、手機與列印樣式。
- `docs/app.js`：任務複製、連到名詞時自動展開、舊首頁錨點導向對應章節。
- `docs/practice.html`、`docs/practice.js`：無後端的商品表單練習場；不儲存正式資料，只預覽及下載草稿。
- `practice-kit/`：練習資料與 `.agents/skills/lytc-product-brief/SKILL.md` 原始檔。
- `docs/downloads/codex-github-setup.txt`、`codex-first-task.txt`、`codex-update-project.txt`：準備、美編教練與 Pull 對話，與 GitHub／實作章節同步。
- `practice-kit/START-HERE.md`：舊版需求單補充練習，與公司 Repo 主線分開。
- `docs/downloads/codex-practice-kit.zip`：供同事下載的練習包，包含完整 `practice-kit/` 目錄與隱藏 Skill 資料夾。
- `docs/.nojekyll`：讓 GitHub Pages 直接提供靜態檔案。

GitHub Pages 從 `main` 分支的 `/docs` 發布，不需安裝依賴或編譯。

## 更新與驗證

1. 更新 HTML、README 與有關練習資料，保持內容一致。
2. 練習包有修改時，重新打包 ZIP，確認其中包含 `.agents/skills/`，不包含 outputs 或真實工作資料。
3. 執行 `node --check docs/app.js` 與 `node --check docs/practice.js`，核對頁內連結、下載路徑與練習答案。
4. 本機使用 `python3 -m http.server 8765 --bind 127.0.0.1 --directory docs` 預覽。檢查章節翻頁、手機章節目錄、名詞展開及任務複製。若有修改表單，另驗證欄位、修改後重新預覽與草稿下載。
5. 提交並推送 `main`，確認 Pages 部署成功，並比對正式頁面及 ZIP。

網站為公開教材。原有商品工作包仍保留私人權限；真實帳務、合約、素材與憑證不加入本儲存庫。

Google Drive 章節採原生外掛授權，工具包含一般檔案上傳、轉成原生 Google Sheets、讀寫指定儲存格；不需要自建 Google Cloud、MCP 服務或 Cloudflare。各員工須各自登入並有目標權限，管理員政策可能影響外掛可用性。

v3.3 已以虛構資料實測本機說明檔上傳、Excel 原生匯入與同一份 Sheet 局部修改：採購清單 P-002 數量 3 → 5、進度待採購 → 已採購，小計 540 → 900、合計 1,250 → 1,610，公式保留，已檢視 Google 渲染畫面。實測帳號與私人雲端檔案網址不放在公開教材。

v3.4 新增第八章「把工作建立成 Codex 專案」。內容取自公司 `product-landingpage-starter` 已實作的市場研究、AGENTS.md 路由、Repo Skills、版本化試作與看圖校對流程；公開教材只說明方法，不包含私人品牌素材。章節明確區分市場案例與成效證據，避免把參考案例誤稱為已驗證高轉換設計。
