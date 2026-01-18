import '../core/scss/core.scss';

// Pugランタイムをグローバルに読み込み
import * as pug from 'pug-runtime';
window.pug = pug;

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
