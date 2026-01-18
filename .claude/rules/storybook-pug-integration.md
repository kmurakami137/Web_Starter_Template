# Storybook + Pug統合ルール

**重要度: ★★★ 必須**

このルールは、PugコンポーネントをStorybookで表示するための標準的な実装パターンを定義します。

---

## 📋 基本原則

1. **Pugファイルが唯一の真実の情報源**（Single Source of Truth）
2. **HTML文字列の直接記述を禁止**（Pugテンプレート経由で生成）
3. **3点セットで管理**（コンポーネント + テンプレート + Stories）

---

## 📁 ファイル構成

### 必須ファイル

```
core/pug/{category}/
├── {name}.pug              # コンポーネント本体（mixin定義）
├── {name}-template.pug     # Storybook用ラッパーテンプレート
└── {name}.stories.js       # Storybookストーリー定義
```

**例:**
```
core/pug/elements/
├── button.pug
├── button-template.pug
└── button.stories.js
```

---

## 🔧 実装パターン

### 1. コンポーネント本体（{name}.pug）

```pug
mixin {name}(param1, param2, param3)
  // コンポーネントの実装
  .{name}(class=`{name}--${param2}`)
    // ...
```

**例:**
```pug
// button.pug
mixin button(text, variant = 'primary', size = '')
  - const sizeClass = size ? `btn--${size}` : ''
  button(class=`btn btn--${variant} ${sizeClass}`)= text
```

---

### 2. Storybook用ラッパー（{name}-template.pug）

**基本形:**
```pug
include {name}.pug

+{name}(param1, param2, param3)
```

**ブロック付きの場合:**
```pug
include {name}.pug

+{name}(param1, param2)
  | !{content}
```

**例:**
```pug
// button-template.pug
include button.pug

+button(text, variant, size)
```

```pug
// card-template.pug
include card.pug

+card(title, modifier)
  | !{content}
```

---

### 3. Storybookストーリー（{name}.stories.js）

**テンプレート:**
```javascript
// {name}.stories.js

// ステップ1: Pugテンプレート関数をインポート（?templateクエリ必須）
import {name}Template from './{name}-template.pug?template';

// ステップ2: Storybook設定
export default {
  title: '{Category}/{Name}',
  tags: ['autodocs'],
};

// ステップ3: バリエーションごとにエクスポート
export const VariantName = {
  render: () => {
    return {name}Template({
      param1: 'value1',
      param2: 'value2',
      param3: 'value3',
    });
  },
};
```

**実例:**
```javascript
// button.stories.js
import buttonTemplate from './button-template.pug?template';

export default {
  title: 'Elements/Button',
  tags: ['autodocs'],
};

export const Primary = {
  render: () => {
    return buttonTemplate({
      text: 'Primary Button',
      variant: 'primary',
      size: '',
    });
  },
};

export const Secondary = {
  render: () => {
    return buttonTemplate({
      text: 'Secondary Button',
      variant: 'secondary',
      size: '',
    });
  },
};

export const Small = {
  render: () => {
    return buttonTemplate({
      text: 'Small Button',
      variant: 'primary',
      size: 'small',
    });
  },
};
```

---

## ✅ チェックリスト

新しいコンポーネントのStoryを作成する際、以下を確認してください：

- [ ] `{name}.pug` - mixin定義が存在する
- [ ] `{name}-template.pug` - ラッパーテンプレートを作成した
- [ ] `{name}.stories.js` - `?template`クエリでインポートしている
- [ ] すべてのパラメータがPugテンプレート経由で渡されている
- [ ] HTML文字列を直接書いていない

---

## 🚫 禁止事項

### ❌ NG例: HTML文字列を直接記述

```javascript
// button.stories.js
export const Primary = {
  render: () => `
    <button class="btn btn--primary">Primary Button</button>
  `,
};
```

**問題:**
- button.pugの変更がStorybookに反映されない
- バグの温床（コピペミス、同期忘れ）

### ✅ OK例: Pugテンプレート経由

```javascript
// button.stories.js
import buttonTemplate from './button-template.pug?template';

export const Primary = {
  render: () => {
    return buttonTemplate({
      text: 'Primary Button',
      variant: 'primary',
      size: '',
    });
  },
};
```

---

## 🔄 動作の仕組み

```
button.pug (変更)
    ↓
button-template.pug (mixinを呼び出し)
    ↓
Viteプラグイン (.storybook/main.js)
    ↓ Pugコンパイル
JavaScript関数に変換
    ↓
button.stories.js (関数をインポート)
    ↓
Storybook (自動反映・HMR対応)
```

---

## 📚 関連ドキュメント

- [.storybook/main.js](../../.storybook/main.js) - Viteプラグイン設定
- [.storybook/preview.js](../../.storybook/preview.js) - Pugランタイム設定
- [FINAL_SUMMARY.md](../../planning/requirements/FINAL_SUMMARY.md) - プロジェクト要件

---

**最終更新:** 2026-01-18
**作成者:** Claude + km
