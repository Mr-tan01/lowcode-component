import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
    {
        ignores: ['node_modules', 'dist', 'public', 'lowcode-docx', 'scripts', 'es'],
    },

    /** js推荐配置 */
    eslint.configs.recommended,
    /** ts推荐配置 */
    ...tseslint.configs.recommended,
    /** vue推荐配置 */
    ...eslintPluginVue.configs['flat/recommended'],

    stylistic.configs.customize({
        indent: 2,
        quotes: 'single',
        semi: false,
        jsx: true,
        braceStyle: '1tbs',
        arrowParens: 'always',
    }),

    /**
     * javascript 规则
     */
    {
        files: ['**/*.{js,mjs,cjs,vue}'],
        rules: {
            'no-console': 'warn',
        },
    },

    /**
     * 配置全局变量
     */
    {
        languageOptions: {
            globals: {
                ...globals.browser,

                /** 追加一些其他自定义全局规则 */
                wx: true,
            },
        },
    },

    /**
     * vue 规则
     */
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                /** typescript项目需要用到这个 */
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                /** 允许在.vue 文件中使用 JSX */
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            // 在这里追加 vue 规则
            'vue/no-mutating-props': [
                'error',
                {
                    shallowOnly: true,
                },
            ],
            'vue/multi-word-component-names': 'off', // 可以使用any
            '@typescript-eslint/ban-ts-comment': 'off', // 允许使用 @ts-ignore 等注释
            'vue/no-v-html': 'off', // 允许使用 v-html
        },
    },

    /**
     * typescript 规则
     */
    {
        files: ['**/*.{ts,tsx,vue}'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any 类型
            '@typescript-eslint/ban-ts-comment': 'off', // 允许使用 @ts-ignore 等注释
            'no-console': 'off', // 允许使用 console
            '@typescript-eslint/no-this-alias': 'off', // 允许在类中使用 this 的别名
            'vue/no-side-effects-in-computed-properties': 'off', // 允许在计算属性中有副作用
            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowTernary: true,
                },
            ],
        },
    },
    eslintPluginPrettierRecommended,
    {
        files: ['**/*.{js,ts,vue}'],
        ignores: [
            'node_modules/**',
            'dist/**',
            'public/**',
            'lowcode-docx/**',
            'scripts/**',
            'es/**',
            // 在这里添加其他需要忽略的文件或目录
        ],
    },
)
