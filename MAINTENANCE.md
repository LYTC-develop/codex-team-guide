# 教材網站維護

正式網站：https://lytc-develop.github.io/codex-team-guide/

儲存庫：https://github.com/LYTC-develop/codex-team-guide

## 內容方向

首頁只保留「三個工作觀念 → 選一個實作 → 遇到再查名詞」。不要把進階設定、長篇字典或流程清單堆回首頁。練習應有原始資料、可操作步驟、實際交付物及明確完成標準。

## 檔案與發布

- `README.md`：GitHub 直接閱讀的精簡教材。
- `docs/index.html`：教學首頁，案例與名詞按需展開。
- `docs/styles.css`：電腦、手機與列印樣式。
- `docs/app.js`：任務複製、連到名詞時自動展開。
- `docs/practice.html`、`docs/practice.js`：無後端的商品表單練習場；不儲存正式資料，只預覽及下載草稿。
- `practice-kit/`：練習資料與 `.agents/skills/lytc-product-brief/SKILL.md` 原始檔。
- `docs/downloads/codex-practice-kit.zip`：供同事下載的練習包，包含完整 `practice-kit/` 目錄與隱藏 Skill 資料夾。
- `docs/.nojekyll`：讓 GitHub Pages 直接提供靜態檔案。

GitHub Pages 從 `main` 分支的 `/docs` 發布，不需安裝依賴或編譯。

## 更新與驗證

1. 更新 HTML、README 與有關練習資料，保持內容一致。
2. 練習包有修改時，重新打包 ZIP，確認其中包含 `.agents/skills/`，不包含 outputs 或真實工作資料。
3. 執行 `node --check docs/app.js` 與 `node --check docs/practice.js`，核對頁內連結、下載路徑與練習答案。
4. 本機使用 `python3 -m http.server 8765 --bind 127.0.0.1 --directory docs` 預覽。檢查章節展開、任務複製、表單欄位驗證、修改後重新預覽與草稿下載。
5. 提交並推送 `main`，確認 Pages 部署成功，並比對正式頁面及 ZIP。

網站為公開教材。原有商品工作包仍保留私人權限；真實帳務、合約、素材與憑證不加入本儲存庫。
