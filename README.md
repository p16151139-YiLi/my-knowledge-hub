# My Knowledge Hub｜個人知識庫

個人知識管理與學習平台，將不同領域的筆記整理成可瀏覽、可搜尋、可持續擴充的網站。

## 知識分類
- 工程與控制：控制理論、機電系統、控制器設計。
- AI 與程式設計：Python、深度學習、AI Agent。
- 材料與數值模擬：材料性質、分子動力學、LAMMPS。
- 數學與理論：線性代數、微分方程、Lyapunov 等。

## 專案特色
- 原生 HTML、CSS、JavaScript，無需安裝套件。
- 響應式設計，支援桌面與手機。
- 首頁可依標題與關鍵字搜尋筆記。
- 使用 `AGENTS.md` 定義 AI 新增與修改內容的規則。
- 使用 `templates/note-template.md` 規劃新筆記。

## 本機預覽
直接以瀏覽器開啟 `index.html`，或使用 VS Code Live Server。

## GitHub Pages 部署
1. 在 GitHub 建立 Repository，例如 `my-knowledge-hub`。
2. 將本專案所有檔案上傳至 Repository 根目錄。
3. 開啟 Repository 的 Settings → Pages。
4. Source 選擇 Deploy from a branch。
5. Branch 選擇 `main`，資料夾選擇 `/ (root)`，按 Save。
6. 部署完成後，網址格式通常為 `https://你的帳號.github.io/my-knowledge-hub/`。

## 新增筆記
先閱讀 `AGENTS.md`，再依照 `templates/note-template.md` 規劃內容。新增文章後，需同步更新首頁搜尋索引與對應分類頁。
