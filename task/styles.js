'use strict';
module.exports = function() { // eslint-disable-line func-names
  // Global variables
  const plugins = this.opts.plugins,
        config  = this.opts.configs,
        themes  = plugins.getThemes();

  // Loop through themes to compile scss or less depending on your config.json
  themes.forEach(name => {
    plugins.runSequence(config.themes[name].lang + ':' + name);
  });
};
