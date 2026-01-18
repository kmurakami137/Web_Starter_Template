// Pugテンプレート関数をインポート（?templateクエリで自動コンパイル）
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

export const Outline = {
  render: () => {
    return buttonTemplate({
      text: 'Outline Button',
      variant: 'outline',
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

export const Medium = {
  render: () => {
    return buttonTemplate({
      text: 'Medium Button',
      variant: 'primary',
      size: '',
    });
  },
};

export const Large = {
  render: () => {
    return buttonTemplate({
      text: 'Large Button',
      variant: 'primary',
      size: 'large',
    });
  },
};
