const path = require('path')

module.exports = () => {
  const plugins = {}
  plugins.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
  }
  plugins.ua = {
    enable: false,
    path: path.join(__dirname, '../lib/plugin/egg-ua')
  }
  return plugins
}