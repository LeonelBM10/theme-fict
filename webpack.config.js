const { createConfig } = require('@openedx/frontend-build');

const config = createConfig('webpack-dev-server');

delete config.devServer;

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
        // Verificar que no esté ya agregado antes de añadir
        const alreadyAdded = u.options.plugins.some(p =>
          (typeof p === 'string' && p.includes('transform-private-methods')) ||
          (Array.isArray(p) && p[0] && p[0].includes('transform-private-methods'))
        );
        if (!alreadyAdded) {
          u.options.plugins.push(['@babel/plugin-transform-private-methods', {}, 'tanstack-fix']);
        }
      }
    });
  }
});

module.exports = config;