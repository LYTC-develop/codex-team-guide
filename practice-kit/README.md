# Codex 第一次工作練習

這包包含虛構訂單、商品資料與一份可重用的 Skill，不含公司實際帳務。

1. 解壓縮後，在 Codex 開啟這個 `practice-kit` 資料夾。
2. 告訴 Codex：「先閱讀這個專案的 README.md，再帶我做一個練習。」
3. 選以下一項，成果儲存到 `outputs/`。

## Doc：找出收款差異

> 請讀取 docs/orders.md，依檔案內的對帳規則比對訂單與收款。把已配對、少收、未收和無法對應訂單的款項整理成表格，附訂單編號與計算方式。把結果存成 outputs/reconciliation.md，並核對應收、已匹配收款、未匹配收款三項總額。

## Skill：整理商品美編需求單

> 請使用 lytc-product-brief 技能，讀取 docs/product-a.md，產出可交給美編的需求單，存成 outputs/product-a-brief.md。若沒有發現技能，請先讀取 .agents/skills/lytc-product-brief/SKILL.md 並按其流程執行。

做完後，把商品換成 `docs/product-b.md`，請它使用同一份技能產出 `outputs/product-b-brief.md`。比較兩份結果是否沿用同一套檢查與交付方式。

`.agents/skills/lytc-product-brief/SKILL.md` 是這包的共同製作方法，不需每次重寫一大段要求。這是一份美編需求單技能，不生成圖片；需要製圖時再用公司的商品一頁式工作包。

## Computer use：填好商品表單

先確認 Codex 可使用 Computer use 或瀏覽器操作工具；依介面完成啟用及所需權限。如果沒有這個能力，先完成前兩個練習。

> 請讀取 docs/product-a.md，操作 https://lytc-develop.github.io/codex-team-guide/practice.html 的練習商品表單。填入商品名稱、SKU、售價、配送方式與已確認賣點，建立草稿預覽並逐項核對。最後下載草稿，告訴我是否已觸發下載、還有哪些資料待確認。這是虛構資料練習，不操作正式商店。若沒有可用的操作工具，請直接告訴我缺少什麼，不要把操作說明當成已完成。

網頁草稿只在目前頁面暫存；下載後才有可帶走的檔案。這不是正式商品上架。

## 怎麼帶回工作？

把 `docs/` 換成自己工作需要的來源資料；沿用合用的 Skill，或請 AI 依驗收過的做法修改。團隊要共同維護時，把 Skill 放到公司指定的 GitHub Repo，讓大家取得相同版本。

如果使用 ZIP，更新時需重新下載；要持續同步團隊版本，改用 Clone／Pull 流程。實際工作資料依公司規則保存，不加進公開教材。
