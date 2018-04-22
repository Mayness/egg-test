module.exports = appInfo => {
  const config = {}
  config.keys = '1'
  // 模板引擎配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  }
  config.news = {
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
    pageSize: 5
  }
  return config
}