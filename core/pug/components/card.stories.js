// Pugテンプレート関数をインポート（?templateクエリで自動コンパイル）
import cardTemplate from './card-template.pug?template';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
};

export const Default = {
  render: () => {
    return cardTemplate({
      title: 'Default Card',
      modifier: '',
      content: '<p>これは通常のカードコンポーネントです。</p>',
    });
  },
};

export const Featured = {
  render: () => {
    return cardTemplate({
      title: 'Featured Card',
      modifier: 'featured',
      content: '<p>これは強調表示されたカードです。</p>',
    });
  },
};

export const WithRichContent = {
  render: () => {
    return cardTemplate({
      title: 'Rich Content Card',
      modifier: '',
      content: `
        <p>デザイントークンを使用したコンポーネントです。</p>
        <ul>
          <li>項目1</li>
          <li>項目2</li>
          <li>項目3</li>
        </ul>
      `,
    });
  },
};
