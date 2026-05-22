# 株式会社アクティブ — Website

奈良の警備会社「株式会社アクティブ」のコーポレートサイト（Vite + React）。

## ページ構成

| ファイル | 内容 |
|---|---|
| `index.html` | トップページ（Hero / About / 4つの理由 / Services / Recruit / FAQ / Contact） |
| `company.html` | 会社概要（理念・会社情報・業務内容） |
| `services.html` | サービス詳細（交通誘導・駐車場・イベント警備） |
| `recruit.html` | 採用情報（メッセージ・社長の想い・取り組み・1日の流れ・キャリアパス・給料） |

## セットアップ

Node.js（18 以上を推奨）が必要です。未インストールの場合は [nodejs.org](https://nodejs.org/) または Homebrew (`brew install node`) で導入してください。

```sh
npm install      # 依存パッケージのインストール（初回のみ）
```

## ローカル開発

```sh
npm run dev      # → http://localhost:5173/
```

Vite の開発サーバーが起動し、ファイル保存で即座に反映されます（HMR）。

## 本番ビルド

```sh
npm run build    # dist/ フォルダを生成
npm run preview  # ビルド結果をローカルで確認
```

`npm run build` で `dist/` に本番用の静的ファイル一式が出力されます。**この `dist/` フォルダをそのまま公開**してください。

## ディレクトリ構成

```
site/
├── index.html / company.html / services.html / recruit.html  # 各ページの HTML エントリ
├── package.json            # 依存関係・npm スクリプト
├── vite.config.js          # Vite 設定（4ページのマルチページビルド）
├── src/
│   ├── main-index.jsx      # index.html のエントリ
│   ├── main-company.jsx    # company.html のエントリ
│   ├── main-services.jsx   # services.html のエントリ
│   ├── main-recruit.jsx    # recruit.html のエントリ
│   └── components/         # React コンポーネント（ESM / JSX）
│       ├── Shared.jsx      # SectionLabel / Photo / Logo など共通プリミティブ
│       ├── Nav.jsx / Footer.jsx / MobileTabBar.jsx
│       ├── Hero.jsx / About.jsx / Reasons.jsx / Services.jsx / Recruit.jsx
│       ├── ContactBanner.jsx   # 「安心・安全の警備サービス」CTAバナー
│       ├── Faq.jsx / Contact.jsx / App.jsx
│       ├── PageHero.jsx        # 下層ページの共通ヒーロー
│       ├── CompanyPage.jsx     # Philosophy / CompanyInfo / Certification / BusinessBrief / RecruitBanner
│       ├── ServicesPage.jsx    # ServiceDetail × 3 (交通誘導 / 駐車場 / イベント)
│       ├── RecruitPage.jsx     # 採用各ブロック（社長メッセージ / 取り組み / 1日の流れ / キャリアパス / 求める人材 / 応募の流れ）
│       ├── SalaryDetail.jsx    # 給料・待遇詳細
│       └── Marquee.jsx
└── public/                 # ビルド時に dist/ へそのままコピーされる静的ファイル
    ├── styles.css          # ブランドカラー、レスポンシブ、タイポグラフィ
    ├── tokens.css          # 基本トークン
    ├── robots.txt          # クローラ指示
    ├── sitemap.xml         # サイトマップ（4ページ）
    ├── .nojekyll           # GitHub Pages の Jekyll を無効化
    └── assets/             # 画像（ロゴ / ヒーロー / サービス / 採用 / 認定証 / 社長）
        ├── active-logo.png # ロゴ（透過PNG）
        ├── hero-bg.jpg     # トップ ヒーロー背景
        ├── service-hero.jpg
        ├── service-traffic.jpg / service-parking.jpg / service-event.jpg
        ├── recruit-hero.jpg
        ├── contact-bg.jpg  # ContactBanner 背景
        ├── president.jpg   # 代表取締役写真
        └── certification.jpg # 認定標章
```

## GitHub Pages へのデプロイ

1. `npm run build` で `dist/` フォルダを生成
2. `dist/` の中身をリポジトリのルート（または公開ブランチ）にコミット & プッシュ
3. リポジトリの **Settings → Pages** で:
   - **Source**: `Deploy from a branch`
   - **Branch**: 公開ブランチ / `/ (root)`
4. 数分後、設定したドメインで公開されます

`dist/` には `.nojekyll` が含まれるため、GitHub Pages の Jekyll 処理はスキップされます。

## 技術構成

- **Vite 5** によるビルド。`@vitejs/plugin-react` で JSX をビルド時にコンパイル（ブラウザ内 Babel コンパイルは廃止）
- **React 18** — npm パッケージとして同梱、`dist/` にバンドル
- **Lucide** アイコンライブラリも npm パッケージ
- **Google Fonts** から Noto Sans JP / Noto Serif JP / Cormorant Garamond / Inter Tight をロード
- **Google Maps Embed**（API キー不要の `pb=` iframe）で本社地図を表示
- CDN 依存（unpkg）なし。ビルド成果物のみで完結します

## ブランドカラー

| 用途 | 色 |
|---|---|
| メイン（ネイビー） | `#0B2552` (`--brand-blue`) |
| アクセント（ゴールド） | `#C29A5C` (`--brand-gold`) |
| クリーム（背景） | `#FBF8F2` (`--brand-cream`) |
| 本文インク | `#0B1A36` (`--brand-ink`) |

## SEO / シェア

検索エンジンに正しく読み取られるよう、各ページに以下を整備済み:

- `<title>` / `<meta name="description">` / `<meta name="keywords">` / `<meta name="robots">`
- **OGP / Twitter Card**（`og:title` / `og:description` / `og:image` / `og:url` / `og:locale=ja_JP`）
- `<link rel="canonical">` で正規 URL を明示
- favicon / apple-touch-icon は `assets/active-logo.png` を使用
- **JSON-LD 構造化データ**（schema.org）:
  - `index.html` — `Organization` + `LocalBusiness` + `WebSite`
  - `company.html` — `AboutPage` + `BreadcrumbList`
  - `services.html` — `Service` + `OfferCatalog` + `BreadcrumbList`
  - `recruit.html` — `JobPosting`（給与・勤務地・資格を含む）+ `BreadcrumbList`
- `sitemap.xml` — 4ページ分の URL を明示
- `robots.txt` — 全クローラ許可、sitemap への参照を記載

### 本番ドメイン

本サイトは **`https://activenara.com`** で配信されます。各 HTML の `canonical`・`og:url`・`og:image`、JSON-LD の `url`・`logo`・`sameAs`・`item`、`robots.txt` の `Sitemap:`、`sitemap.xml` の `<loc>` すべてに絶対 URL を反映済みです。

ドメイン変更が必要な場合は、`https://activenara.com` を新しい URL に置換してください。

### Google Search Console / Bing への登録

1. [Google Search Console](https://search.google.com/search-console) にプロパティを追加（`https://activenara.com`）
2. `https://activenara.com/sitemap.xml` を送信
3. [リッチリザルトテスト](https://search.google.com/test/rich-results) で各ページの構造化データを検証
4. [PageSpeed Insights](https://pagespeed.web.dev/) で速度・モバイルフレンドリーを確認

## ライセンス

社内利用 / クライアント納品物として作成。掲載素材（写真・ロゴ）の二次利用は禁止します。
