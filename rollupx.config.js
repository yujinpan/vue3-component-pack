/* eslint-env node */

module.exports = {
  banner:
    '/*!\n' +
    ` * your-component v${require('./package.json').version}\n` +
    ` * (c) 2022-${new Date().getFullYear()} your-name\n` +
    ' * Released under the MIT License.\n' +
    ' */\n',
  outputDir: 'lib',
};
