# Claude Code プロジェクトルール

このプロジェクトの開発ルールとガイドラインです。

**プロジェクト名:** Web_Starter_Template
**作成日:** 2026-01-17
**最終更新:** 2026-01-18

---

## 📋 ルール一覧

### コンポーネント開発
- **[Storybook + Pug統合ルール](./.claude/rules/storybook-pug-integration.md)** ⭐ **重要・必読**
  - PugコンポーネントをStorybookで表示する標準パターン
  - 3点セット（コンポーネント + テンプレート + Stories）の管理方法

### プロジェクト構成
- [プロジェクト要件まとめ](./planning/requirements/FINAL_SUMMARY.md)
  - 技術スタック、ディレクトリ構造、運用フロー

---

## 🚀 クイックリファレンス

### 新しいコンポーネントを作成する時

1. **`.claude/rules/storybook-pug-integration.md`** を参照
2. 以下の3ファイルを作成:
   - `{name}.pug` - コンポーネント本体（mixin）
   - `{name}-template.pug` - Storybook用ラッパー
   - `{name}.stories.js` - Storybookストーリー

**テンプレート:**
```pug
// {name}-template.pug
include {name}.pug
+{name}(param1, param2)
```

```javascript
// {name}.stories.js
import {name}Template from './{name}-template.pug?template';

export default {
  title: 'Category/Name',
  tags: ['autodocs'],
};

export const Default = {
  render: () => {
    return {name}Template({ param1: 'value', param2: 'value' });
  },
};
```

---

## 📁 プロジェクト構造

```
Web_Starter_Template/
├── .claude/
│   └── rules/                        # プロジェクトルール
│       └── storybook-pug-integration.md
├── core/
│   ├── pug/
│   │   ├── layouts/
│   │   ├── elements/                 # 単一要素レベル（BEM）
│   │   │   ├── button.pug
│   │   │   ├── button-template.pug   # Storybook用
│   │   │   └── button.stories.js
│   │   └── components/               # 複合コンポーネント
│   ├── scss/
│   │   ├── abstracts/
│   │   ├── base/
│   │   ├── elements/
│   │   ├── components/
│   │   └── core.scss
│   └── design-tokens.json
├── src/
│   └── pages/
├── .storybook/
│   ├── main.js                       # Storybook設定
│   └── preview.js                    # Pugランタイム設定
├── planning/
│   └── requirements/
│       └── FINAL_SUMMARY.md          # プロジェクト要件
└── CLAUDE.md                         # このファイル
```

---

## 🛠 開発コマンド

```bash
# 開発サーバー
npm run dev              # Vite開発サーバー (http://localhost:3000)
npm run storybook        # Storybook (http://localhost:6008)

# ビルド
npm run build            # 本番ビルド
npm run tokens           # Design Tokens生成

# Lint/Format
npm run lint             # 全Lintチェック
npm run format           # Prettierでコード整形
```

---

## 🎨 CSS設計方針

### Phase 1: BEM運用（現在）
- **命名規則:** `.block__element--modifier`
- **例:** `.card`, `.card__header`, `.card__body--featured`
- **elements/**: 単一HTML要素レベル（`_links.scss`, `_buttons.scss`）
- **components/**: 複合コンポーネント（`_card.scss`, `_form.scss`）

### Phase 2: 移行準備（将来）
- `elements/` → Atomic Design の atoms 相当
- `components/` → molecules/organisms 的に再分類

---

## 📚 参考ドキュメント

- [Vite公式ドキュメント](https://vitejs.dev/)
- [Pug公式ドキュメント](https://pugjs.org/)
- [Storybook公式ドキュメント](https://storybook.js.org/)
- [BEM公式](https://getbem.com/)

---

## 📝 ルール追加方法

新しいルールを追加する場合：

1. `.claude/rules/{rule-name}.md` を作成
2. このファイル（CLAUDE.md）の「ルール一覧」に追加
3. 必要に応じて「クイックリファレンス」を更新

---

**このファイルは常に最新の状態に保ってください。**
