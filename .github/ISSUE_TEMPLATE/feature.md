---
name: 機能追加
about: 新しいコンポーネントや機能の追加
title: '[FEATURE] '
labels: enhancement
assignees: ''
---

## 概要
<!-- 追加する機能の概要を簡潔に記述 -->

## 要件
<!-- チェックボックス形式で具体的な要件を記述 -->
- [ ] レスポンシブ対応
- [ ] BEM記法でCSS実装
- [ ] Storybook対応（3-file pattern）
- [ ] Design Tokens使用

## 実装対象
<!-- 実装するファイルを明記 -->
- `core/pug/[elements|components]/[name].pug` - コンポーネント本体
- `core/pug/[elements|components]/[name]-template.pug` - Storybookラッパー
- `core/pug/[elements|components]/[name].stories.js` - Storybookストーリー
- `core/scss/[elements|components]/_[name].scss` - スタイル

## 参考
<!-- 参考にするドキュメントやルール -->
- デザイントークン: `core/design-tokens.json`
- ルール: `.claude/rules/storybook-pug-integration.md`
- CSS設計: `CLAUDE.md` - BEM記法

## 備考
<!-- その他、実装時の注意事項など -->
