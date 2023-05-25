import type { StorybookConfig } from "@storybook/nextjs";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      webpackFinal: async (config) => {
        // 기존의 CSS 설정을 가져옵니다.
        const existingCssRule = config.module.rules.find(
            (rule) => rule.test && rule.test.toString() === '/\\.css$/'
        );
        if (existingCssRule) {
          // 기존의 CSS 설정을 제거합니다.
          config.module.rules = config.module.rules.filter(
              (rule) => rule !== existingCssRule
          );
        }

        // Tailwind CSS 설정을 추가합니다.
        config.module.rules.push({
          test: /\.css$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          ],
          include: path.resolve(__dirname, '../'),
        });

        return config;
      },
    },
  },
  webpackFinal: async config => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
