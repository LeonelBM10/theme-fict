const { createConfig } = require('@openedx/frontend-build');

const config = createConfig('webpack-dev-server');

// Fix babel para @tanstack
config.module.rules.forEach(rule => {
  if (!rule.use) return;
  const uses = Array.isArray(rule.use) ? rule.use : [rule.use];
  const hasBabel = uses.some(u => u && u.loader && u.loader.includes('babel-loader'));
  if (hasBabel) {
    rule.exclude = /node_modules\/(?!@tanstack)/;
    uses.forEach(u => {
      if (u && u.loader && u.loader.includes('babel-loader')) {
        u.options = u.options || {};
        u.options.plugins = u.options.plugins || [];
        u.options.plugins.push('@babel/plugin-transform-private-methods');
      }
    });
  }
});

module.exports = config;
