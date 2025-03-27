import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:css-modules/recommended',
    'plugin:prettier/recommended'
  ),
  {
    plugins: ['css-modules', 'prettier'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ],
      'css-modules/no-undef-class': [2, { camelCase: true }], // Проверяет CSS-модули
      'css-modules/no-unused-class': 1, // Предупреждение, если класс не используется
      'prettier/prettier': ['error'] // Включает автоформатирование Prettier
    }
  }
]

export default eslintConfig
