import pug from 'pug';
import { resolve } from 'path';

export default {
  stories: ['../core/**/*.stories.js', '../stories/**/*.stories.js'],

  framework: {
    name: '@storybook/html-vite',
    options: {},
  },

  viteFinal: async (config) => {
    return {
      ...config,
      plugins: [
        ...(config.plugins || []),
        // Pugファイルをテンプレート関数としてインポート可能にする
        {
          name: 'vite-plugin-pug-template',
          transform(code, id) {
            // .pug?template クエリが付いたファイルのみ処理
            if (id.includes('.pug?template')) {
              const filePath = id.split('?')[0];

              try {
                // Pugをコンパイルして関数化
                const templateFunction = pug.compileFile(filePath, {
                  basedir: resolve(process.cwd(), 'core/pug'),
                  filename: filePath,
                });

                // 関数を文字列化してエクスポート
                return {
                  code: `export default ${templateFunction.toString()}`,
                  map: null,
                };
              } catch (error) {
                console.error('Pug compilation error:', error);
                throw error;
              }
            }
          },
        },
      ],
      css: {
        ...config.css,
        preprocessorOptions: {
          scss: {
            includePaths: ['./core/scss', './node_modules'],
          },
        },
      },
    };
  },
};
