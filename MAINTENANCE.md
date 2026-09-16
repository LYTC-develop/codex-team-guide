# 教材網站維護

正式網站：https://lytc-develop.github.io/codex-team-guide/

儲存庫：https://github.com/LYTC-develop/codex-team-guide

## 檔案與發布

- `README.md`：GitHub 直接閱讀的完整教材。
- `docs/index.html`：教學網站，內容與 README 維持一致。
- `docs/styles.css`：電腦、手機與列印樣式。
- `docs/app.js`：章節導覽、手機目錄與任務複製；主要內容在關閉 JavaScript 時仍可閱讀。
- `docs/favicon.svg`：網站圖示。
- `docs/.nojekyll`：讓 GitHub Pages 直接提供靜態檔案。

GitHub Pages 設定為從 `main` 分支的 `/docs` 發布，不需安裝依賴或編譯。推送後等待 GitHub Pages 部署完成，再確認正式網址與更新內容。

## 更新流程

1. 修改相關 HTML 與 Markdown 教材，保留案例前提、資料來源及完成標準。
2. 用 `node --check docs/app.js` 檢查 JavaScript 語法，並檢查連結與資源路徑。
3. 若要本機閱讀，執行 `python3 -m http.server 8765 --bind 127.0.0.1 --directory docs`，開啟 `http://127.0.0.1:8765/`。
4. 提交並推送 `main`，確認 Pages 部署成功及正式頁面更新。

網站為公開教材，只放可公開內容。原有商品工作包仍保留自己的存取權限；真實帳務、合約、素材與憑證不加入本儲存庫。

GitHub 官方說明：[設定 Pages 發布來源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。
