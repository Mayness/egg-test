// config/config.default.js
module.exports = appInfo => {
    const config = {}
    // 路由密匙
    config.keys =  appInfo.name + '123'
    // 模板配置
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        }
    }
    // 定义中间件
    config.middleware = [
        'addString'
    ]
    // 中间件配置文件
    config.addString = {
        pa: '增加的字符串'
    }
    return config
}