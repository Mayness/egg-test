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
    // 关闭xframe防范
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        }
    }
    // 定义在body中json或form格式的长度限制，如果超过限制会抛出413异常，
    // 如果有一层反向代理（Nginx），也需要调整配置
    config.bodyParser = {
        jsonLimit: '1mb',
        formLimit: '1mb'
    }
    // 上传增加支持文件
    config.multipart = {
      fileExtensions: [ '.txt' ], // 增加对 .txt 扩展名的支持
    }
    // 设置反向代理
    config.proxy = true
    return config
}