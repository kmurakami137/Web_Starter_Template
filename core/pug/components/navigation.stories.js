// Pugテンプレート関数をインポート（?templateクエリで自動コンパイル）
import navigationTemplate from './navigation-template.pug?template';

export default {
  title: 'Components/Navigation',
  tags: ['autodocs'],
};

export const Default = {
  render: () => {
    return navigationTemplate({
      logoText: 'My Site',
      items: [
        { label: 'Home', url: '/', active: true },
        { label: 'About', url: '/about', active: false },
        { label: 'Services', url: '/services', active: false },
        { label: 'Contact', url: '/contact', active: false },
      ],
      modifier: '',
    });
  },
};

export const WithManyItems = {
  render: () => {
    return navigationTemplate({
      logoText: 'Web Starter',
      items: [
        { label: 'Home', url: '/', active: false },
        { label: 'About', url: '/about', active: false },
        { label: 'Services', url: '/services', active: true },
        { label: 'Portfolio', url: '/portfolio', active: false },
        { label: 'Blog', url: '/blog', active: false },
        { label: 'Contact', url: '/contact', active: false },
      ],
      modifier: '',
    });
  },
};

export const Dark = {
  render: () => {
    return navigationTemplate({
      logoText: 'Dark Theme',
      items: [
        { label: 'Home', url: '/', active: false },
        { label: 'Products', url: '/products', active: true },
        { label: 'About', url: '/about', active: false },
      ],
      modifier: 'dark',
    });
  },
};
