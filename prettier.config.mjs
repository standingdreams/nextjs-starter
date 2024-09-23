/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  importOrderSeparation: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/util/(.*)$',
    '^@/pages/(.*)$',
    '^@/layouts/(.*)$',
    '^@/components/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
};

export default config;
