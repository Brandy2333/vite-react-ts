/*
 * @Author: ZhaoYue
 * @Date: 2022-05-10 11:30:09
 * @Description: 文件内容描述
 * @LastEditTime: 2022-06-08 14:51:16
 * @LastEditors: ZhaoYue
 * @FilePath: /dip-ai-platform-ui/stylelint.config.js
 */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'comment-empty-line-before': null,
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: ['/colorPalette/']
      }
    ],
    'no-invalid-double-slash-comments': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'declaration-empty-line-before': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-eol-whitespace': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'function-url-quotes': 'never',
    'selector-class-pattern': '^[a-zA-Z][A-Za-z0-9-]+$',
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['box-orient', 'display']
      }
    ],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box']
      }
    ],
    'max-nesting-depth': 3
  }
}