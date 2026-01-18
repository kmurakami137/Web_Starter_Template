# 最終要件まとめ

**作成日:** 2026-01-17
**プロジェクト名:** Web_Starter_Template（Viteベーステンプレート環境）

---

## 📋 プロジェクト概要

**目的:**
- 再利用可能なWeb制作テンプレート環境の構築
- 案件ごとに最適化して使えるベース環境
- コンポーネント・デザインシステムの効率的な管理

**運用方式:**
- Git Submodule方式
- Web_Starter_Template（共通リポジトリ）→ 各案件リポジトリで参照

---

## 🛠 技術スタック

### ビルドツール
- **Vite** - メインビルドツール（開発サーバー・本番ビルド）
- **sharp-cli** - WebP画像変換（ビルド時自動実行）
- ~~Gulp~~ - **不採用**（Viteで完結）

### 言語・フレームワーク
| カテゴリ | 採用技術 | 備考 |
|---------|---------|------|
| **HTML** | Pug | テンプレートエンジン |
| **CSS** | SCSS + Bootstrap（部分） | グリッド・ユーティリティのみ |
| **JavaScript** | Vanilla JS (ES6+) | モジュール分割、Rollupでバンドル |

### CSSフレームワーク戦略
- **Bootstrap（ハイブリッド運用）**
  - ✅ 使う：グリッドシステム、ユーティリティクラス、変数・mixin
  - ❌ 使わない：コンポーネント（ボタン、カード等）→ 独自実装

### 対象ブラウザ
- **モダンブラウザのみ**
  - Chrome, Firefox, Safari, Edge（最新2バージョン）
  - IE11非対応

### 画像最適化
- **WebP対応**
  - sharp-cliで自動変換（JPG/PNG → WebP）
  - picture要素でフォールバック

### 品質管理ツール
| ツール | 対象 | 役割 |
|--------|------|------|
| **Prettier** | 全ファイル | コード整形 |
| **ESLint** | JavaScript | 構文チェック |
| **Stylelint** | SCSS/CSS | スタイルチェック |
| **pug-lint** | Pug | テンプレートチェック |

---

## 📁 ディレクトリ構造

### Web_Starter_Template リポジトリ（submodule本体）

```
Web_Starter_Template/
├── core/
│   ├── pug/
│   │   ├── layouts/              # 共通レイアウト
│   │   │   ├── base.pug
│   │   │   └── two-column.pug
│   │   ├── elements/             # 最小単位（Atomic Design対応）
│   │   │   ├── link.pug
│   │   │   └── button.pug
│   │   ├── components/           # 共通コンポーネント
│   │   │   ├── card.pug
│   │   │   ├── header.pug
│   │   │   └── footer.pug
│   │   └── mixins/               # 共通mixin
│   │       └── utils.pug
│   │
│   ├── scss/
│   │   ├── abstracts/
│   │   │   ├── _bootstrap-override.scss  # Bootstrap変数上書き
│   │   │   ├── _variables.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _tokens.scss              # design-tokensから自動生成
│   │   ├── vendor/
│   │   │   └── _bootstrap.scss           # Bootstrap部分import
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   └── _typography.scss
│   │   ├── elements/                     # 単一要素レベル（Atomic Design対応）
│   │   │   ├── _links.scss
│   │   │   ├── _buttons.scss
│   │   │   └── _inputs.scss
│   │   ├── components/                   # 独自コンポーネント（BEM記法）
│   │   │   ├── _card.scss
│   │   │   ├── _form.scss
│   │   │   └── _header.scss
│   │   ├── layout/
│   │   │   ├── _container.scss
│   │   │   └── _grid.scss
│   │   ├── utilities/
│   │   │   └── _utilities.scss
│   │   └── core.scss                     # エントリーポイント
│   │
│   ├── js/
│   │   ├── modules/
│   │   │   ├── smooth-scroll.js
│   │   │   └── mobile-menu.js
│   │   └── core.js
│   │
│   └── design-tokens.json                # 共通変数（一元管理）
│
├── scripts/
│   └── generate-tokens.js                # JSONからSCSS生成
│
├── public/                                # 最適化不要ファイル
│   ├── favicon.ico
│   └── robots.txt
│
├── vite.config.js                         # Vite設定
├── package.json
├── .gitignore
├── .editorconfig
├── .prettierrc
├── .eslintrc.json
├── .stylelintrc.json
├── .pug-lintrc.json
├── README.md
└── CHANGELOG.md
```

### 案件リポジトリ（例: my-project/）

```
my-project/
├── core/  (submodule → Web_Starter_Template)
│
├── src/
│   ├── pages/                    # 案件固有のページ（Pugエントリー）
│   │   ├── index.pug
│   │   ├── about.pug
│   │   └── contact.pug
│   │
│   ├── pug/
│   │   ├── layouts/              # 案件固有のレイアウト（任意）
│   │   ├── components/           # 案件固有のコンポーネント（任意）
│   │   ├── mixins/               # 案件固有のmixin（任意）
│   │   └── includes/             # 案件固有のパーツ（任意）
│   │
│   ├── scss/
│   │   ├── components/           # 案件固有のコンポーネントスタイル
│   │   ├── layout/               # 案件固有のレイアウトスタイル
│   │   ├── pages/                # ページ固有のスタイル
│   │   ├── _variables.scss       # 案件固有の変数（core上書き）
│   │   └── main.scss             # エントリーポイント
│   │
│   ├── js/
│   │   ├── modules/              # 案件固有のモジュール
│   │   └── main.js               # エントリーポイント
│   │
│   └── assets/
│       └── images/               # 案件固有の画像
│           ├── hero.jpg
│           └── hero.webp         # sharp-cliで自動生成
│
├── dist/  (ビルド出力 - gitignore)
│
├── vite.config.js                # coreから継承・カスタマイズ
├── package.json
├── .gitignore
├── .gitmodules                   # submodule設定
└── README.md
```

---

## 🎨 デザイントークン（共通変数管理）

### design-tokens.json（一元管理）

```json
{
  "colors": {
    "primary": "#3b82f6",
    "secondary": "#6366f1",
    "success": "#10b981",
    "danger": "#ef4444",
    "gray": {
      "50": "#f9fafb",
      "100": "#f3f4f6",
      "900": "#111827"
    }
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem"
  },
  "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
  },
  "fontSize": {
    "sm": "0.875rem",
    "base": "1rem",
    "lg": "1.125rem",
    "xl": "1.5rem"
  }
}
```

**活用先:**
- SCSS → 自動生成された`_tokens.scss`として使用
- Pug → `tokens`変数として参照可能
- JavaScript → importして使用

---

## 🔧 Vite設定（概要）

### vite.config.js（主要部分）

```javascript
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const tokens = JSON.parse(readFileSync('./core/design-tokens.json', 'utf-8'));

export default defineConfig({
  plugins: [
    // Pug
    pugPlugin({
      basedir: resolve(__dirname, 'core/pug'),
      locals: {
        tokens: tokens,
      },
    }),

    // 画像圧縮（JPG/PNG）
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          resolve(__dirname, 'core/scss'),
          resolve(__dirname, 'node_modules'),
        ],
      },
    },
  },

  resolve: {
    alias: {
      '@core': resolve(__dirname, 'core'),
      '@': resolve(__dirname, 'src'),
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
```

---

## 📦 package.json（主要部分）

```json
{
  "name": "web-starter-template",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "npm run images && npm run tokens && vite build",
    "preview": "vite preview",

    "images": "sharp-cli -i 'src/assets/images/**/*.{jpg,png}' -o 'src/assets/images' -f webp -q 80",
    "tokens": "node scripts/generate-tokens.js",

    "lint:js": "eslint src/js core/js",
    "lint:css": "stylelint \"{src,core}/**/*.scss\"",
    "lint:pug": "pug-lint src/pug core/pug",
    "lint": "npm run lint:js && npm run lint:css && npm run lint:pug",

    "format": "prettier --write \"src/**/*.{pug,scss,js,json}\""
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "vite-plugin-pug": "^0.3.2",
    "vite-plugin-image-optimizer": "^1.1.7",
    "sharp-cli": "^4.2.0",
    "sass": "^1.70.0",

    "prettier": "^3.2.0",
    "eslint": "^8.56.0",
    "stylelint": "^16.2.0",
    "stylelint-config-standard-scss": "^13.0.0",
    "pug-lint": "^2.7.0",

    "glob": "^10.3.10"
  },
  "dependencies": {
    "bootstrap": "^5.3.2"
  }
}
```

---

## 🔄 運用フロー

### 1. テンプレート環境の初回セットアップ

```bash
# Web_Starter_Templateリポジトリ作成
mkdir Web_Starter_Template && cd Web_Starter_Template
git init
git remote add origin https://github.com/yourusername/Web_Starter_Template.git

# 初回コミット
git add .
git commit -m "Initial commit: v1.0.0"
git tag -a v1.0.0 -m "First release"
git push origin main --tags
```

### 2. 新規案件でテンプレート使用

```bash
# 案件リポジトリ作成
mkdir my-project && cd my-project
git init

# submodule追加
git submodule add https://github.com/yourusername/Web_Starter_Template.git core
git submodule update --init --recursive

# 依存関係インストール
npm install

# 開発開始
npm run dev
```

### 3. 開発フロー

```bash
# 開発サーバー起動（ホットリロード）
npm run dev

# Lint実行
npm run lint

# コード整形
npm run format

# 本番ビルド（画像最適化込み）
npm run build

# ビルド結果確認
npm run preview
```

### 4. coreの更新

```bash
# 案件リポジトリで
cd my-project/core
git pull origin main

cd ..
git add core
git commit -m "Update core to latest"
```

---

## 📏 Bootstrap 運用戦略

### 使うもの
- ✅ グリッドシステム（container, row, col）
- ✅ ブレークポイント・変数・mixin
- ✅ ユーティリティクラス（mt-4, d-flex等）

### 使わないもの
- ❌ ボタン、カード等のコンポーネント → 独自実装

### SCSS読み込み順序

```scss
// core/scss/core.scss

// 1. Bootstrap変数上書き
@import 'abstracts/bootstrap-override';

// 2. Bootstrap（部分的）
@import 'vendor/bootstrap';

// 3. design-tokens
@import 'abstracts/tokens';

// 4. 独自スタイル
@import 'abstracts/variables';
@import 'abstracts/mixins';
@import 'base/reset';
@import 'base/typography';
@import 'elements/links';
@import 'elements/buttons';
@import 'elements/inputs';
@import 'components/card';
@import 'components/form';
@import 'components/header';
```

---

## 🎯 コンポーネント設計方針

### CSS設計方針

#### Phase 1: BEM運用（現在）
- **命名規則:** `.block__element--modifier`
- **例:** `.card`, `.card__header`, `.card__body--featured`
- **配置:** `components/` にBEM記法でコンポーネント配置
- **elements/:** 単一HTML要素レベル（`_links.scss`, `_buttons.scss`, `_inputs.scss`）

#### Phase 2: 移行準備（将来）
- `elements/` フォルダで Atomic Design の atoms 相当を実装
- `components/` を molecules/organisms 的に再分類

#### Phase 3: Atomic Design完全移行（オプション）
- `elements/` → `atoms/`
- `components/` → `molecules/` + `organisms/`
- `layout/` → `templates/`

### coreに含めるもの（共通・再利用）
- 基本レイアウト（base.pug, two-column.pug）
- 汎用要素・コンポーネント（link, button, card, form）
- ヘッダー・フッター
- デザインシステムの基盤

### 案件側で追加するもの（案件固有）
- ページファイル（index.pug, about.pug）
- 案件専用コンポーネント（product-card.pug）
- 案件専用レイアウト（three-column.pug）
- カスタムスタイル

### パス参照ルール

```pug
//- coreのファイル（絶対パス）
extends /core/pug/layouts/base.pug
include /core/pug/components/button.pug

//- 案件固有のファイル（絶対パス）
extends /src/pug/layouts/three-column.pug
include /src/pug/components/product-card.pug
```

---

## 📊 メリット整理

### この構成のメリット

**技術面:**
- ✅ 超高速な開発体験（Vite HMR）
- ✅ モダンな技術スタック（ES6+）
- ✅ 軽量（Bootstrap部分利用で75%削減）
- ✅ 自動最適化（画像、コード）

**運用面:**
- ✅ 案件ごとにバージョン管理可能（submodule）
- ✅ coreの更新を選択的に適用
- ✅ 共通コンポーネントの一元管理
- ✅ デザインシステムの統一

**保守性:**
- ✅ 1つのツール（Vite）で完結
- ✅ 設定ファイルがシンプル
- ✅ Linterで品質担保
- ✅ design-tokensで変数一元管理

---

## 📚 コンポーネントカタログ（Histoire）

### 導入ツール
- **Histoire** - Vite特化のコンポーネントカタログ
- Storybookの代替として採用（Vite環境に最適化、超高速HMR）

### 主な用途
- コンポーネントのバリエーション確認（Elements, Components）
- デザイントークンの可視化（色、サイズ、ブレークポイント等）
- チーム・クライアント間でのデザインシステム共有
- 静的サイトとして出力可能（GitHub Pages等で公開可）

### package.json設定

```json
{
  "devDependencies": {
    "histoire": "^0.17.0",
    "@histoire/plugin-vue": "^0.17.0"
  },
  "scripts": {
    "story:dev": "histoire dev",
    "story:build": "histoire build",
    "story:preview": "histoire preview"
  }
}
```

### 設定ファイル

#### histoire.config.js

```javascript
import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';

export default defineConfig({
  plugins: [HstVue()],

  setupFile: './histoire.setup.js',

  storyMatch: [
    'core/pug/**/*.story.js',
    'src/pug/**/*.story.js',
  ],

  tree: {
    groups: [
      {
        id: 'elements',
        title: 'Elements',
        include: file => file.path.includes('elements'),
      },
      {
        id: 'components',
        title: 'Components',
        include: file => file.path.includes('components'),
      },
      {
        id: 'tokens',
        title: 'Design Tokens',
        include: file => file.path.includes('tokens'),
      },
    ],
  },

  theme: {
    title: 'Web Starter Template',
    colors: {
      primary: { 500: '#3b82f6' },
    },
  },
});
```

#### histoire.setup.js

```javascript
import './core/scss/core.scss';  // スタイルの読み込み
```

### ストーリーファイルの例

#### Elements/Button

```javascript
// core/pug/elements/button.story.js
export default {
  title: 'Elements/Button',
  layout: { type: 'grid', width: 200 },
};

export const Primary = () => ({
  template: `
    <button class="btn btn--primary">
      Primary Button
    </button>
  `,
});

export const Secondary = () => ({
  template: `
    <button class="btn btn--secondary">
      Secondary Button
    </button>
  `,
});

export const Sizes = () => ({
  template: `
    <div style="display: flex; gap: 1rem; align-items: center;">
      <button class="btn btn--primary btn--small">Small</button>
      <button class="btn btn--primary">Medium</button>
      <button class="btn btn--primary btn--large">Large</button>
    </div>
  `,
});
```

#### Design Tokens

```javascript
// core/design-tokens.story.js
import tokens from './design-tokens.json';

export default {
  title: 'Design Tokens/Colors',
};

export const Colors = () => ({
  template: `
    <div style="display: grid; gap: 1rem;">
      ${Object.entries(tokens.colors).map(([key, value]) => `
        <div style="display: flex; gap: 1rem; align-items: center;">
          <div style="width: 100px; height: 100px; background: ${value}; border-radius: 8px;"></div>
          <div>
            <strong>${key}</strong><br>
            <code>${value}</code>
          </div>
        </div>
      `).join('')}
    </div>
  `,
});
```

### ディレクトリ構造

```
Web_Starter_Template/
├── core/
│   ├── pug/
│   │   ├── elements/
│   │   │   ├── button.pug
│   │   │   └── button.story.js      # Histoireストーリー
│   │   └── components/
│   │       ├── card.pug
│   │       └── card.story.js        # Histoireストーリー
│   ├── design-tokens.json
│   └── design-tokens.story.js       # デザイントークン表示用
│
├── histoire.config.js
├── histoire.setup.js
└── .histoire/                       # ビルド出力（gitignore）
```

### コマンド

```bash
# 開発サーバー起動
npm run story:dev
# → http://localhost:6006

# 静的サイト生成
npm run story:build
# → .histoire/dist/ に出力

# ビルド結果プレビュー
npm run story:preview
```

---

## 🚀 次のステップ（実装フェーズ）

1. **基本構造構築**
   - vite.config.js作成
   - package.json作成
   - ディレクトリ作成

2. **core資産の作成**
   - design-tokens.json
   - Pugレイアウト・コンポーネント
   - SCSSデザインシステム
   - JavaScriptモジュール

3. **設定ファイル整備**
   - Prettier設定
   - ESLint設定
   - Stylelint設定
   - pug-lint設定

4. **Histoire環境構築**
   - histoire.config.js作成
   - histoire.setup.js作成
   - デザイントークンストーリー作成
   - コンポーネントストーリー作成

5. **サンプル実装**
   - サンプルページ作成
   - コンポーネント使用例

6. **ドキュメント作成**
   - README.md
   - 使い方ガイド

---

## ✅ 確定事項チェックリスト

- [x] ビルドツール：Vite + sharp-cli
- [x] テンプレートエンジン：Pug
- [x] CSS：SCSS + Bootstrap（グリッドのみ）
- [x] JavaScript：Vanilla JS + Rollup
- [x] 対象ブラウザ：モダンブラウザのみ
- [x] 画像最適化：WebP対応（sharp-cli）
- [x] Linter/Formatter：全導入
- [x] 共通変数：design-tokens.json
- [x] 運用方式：Git Submodule
- [x] ディレクトリ構造：フラット + 案件固有拡張
- [x] コンポーネントカタログ：Histoire
- [x] CSS設計：BEM → Atomic Design移行対応

---

**この要件で実装を開始できます。**
