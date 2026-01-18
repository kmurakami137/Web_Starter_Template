import tokens from '../core/design-tokens.json';

export default {
  title: 'Design Tokens/Colors',
  tags: ['autodocs'],
};

export const PrimaryColors = {
  render: () => `
    <div style="display: grid; gap: 1.5rem;">
      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="width: 100px; height: 100px; background: ${tokens.colors.primary}; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></div>
        <div>
          <strong style="font-size: 1.125rem;">Primary</strong><br>
          <code style="background: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem;">${tokens.colors.primary}</code>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="width: 100px; height: 100px; background: ${tokens.colors.secondary}; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></div>
        <div>
          <strong style="font-size: 1.125rem;">Secondary</strong><br>
          <code style="background: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem;">${tokens.colors.secondary}</code>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="width: 100px; height: 100px; background: ${tokens.colors.success}; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></div>
        <div>
          <strong style="font-size: 1.125rem;">Success</strong><br>
          <code style="background: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem;">${tokens.colors.success}</code>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="width: 100px; height: 100px; background: ${tokens.colors.danger}; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></div>
        <div>
          <strong style="font-size: 1.125rem;">Danger</strong><br>
          <code style="background: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem;">${tokens.colors.danger}</code>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="width: 100px; height: 100px; background: ${tokens.colors.warning}; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></div>
        <div>
          <strong style="font-size: 1.125rem;">Warning</strong><br>
          <code style="background: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem;">${tokens.colors.warning}</code>
        </div>
      </div>
    </div>
  `,
};

export const GrayScale = {
  render: () => {
    const grays = Object.entries(tokens.colors.gray)
      .map(
        ([shade, color]) => `
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;">
          <div style="width: 80px; height: 60px; background: ${color}; border-radius: 4px; border: 1px solid #e5e7eb;"></div>
          <div>
            <strong>Gray ${shade}</strong><br>
            <code style="background: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem;">${color}</code>
          </div>
        </div>
      `
      )
      .join('');

    return `<div>${grays}</div>`;
  },
};

export const Spacing = {
  render: () => {
    const spacings = Object.entries(tokens.spacing)
      .map(
        ([key, value]) => `
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.5rem;">
          <div style="width: ${value}; height: 40px; background: #3b82f6; border-radius: 4px;"></div>
          <div>
            <strong>${key}</strong>: <code style="background: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem;">${value}</code>
          </div>
        </div>
      `
      )
      .join('');

    return `<div>${spacings}</div>`;
  },
};
