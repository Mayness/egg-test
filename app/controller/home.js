const Controller = require('./core/baseController')
/*
    this 挂载的对象
    ctx 当前请求的上下文   请求的各类对象、传递的对象等
    app 全局对象的实例    app.js全局的一些参数(Application)
    service  应用对应的service，相当于this.ctx.service
    config   应用配置项，对应相应环境下的config文件，相当于this.app.config
    logger 为当前 controller 封装的 logger 对象。
        上面有四个方法（debug，info，warn，error），分别代表打印四个不同级别的日志，
        使用方法和效果与 context logger 中介绍的一样，但是通过这个 logger 对象记录的日志，
        在日志前面会加上打印该日志的文件路径，以便快速定位日志打印位置。

        info、warn  在egg-test-web.log下    
        error  在common-error.log下
*/
class HomeController extends Controller {
    async index() {
        // 不能在内部放入执行函数，例如success
        const { ctx, app, config, logge } = this
        console.log(ctx.ips)
        // logger.warn(ctx)
        // ctx.throw(404, '错误信息') 不常用
        const data = ctx.pa + app.params
        // 需要用this来调用
        this.success(data)
    }
}

module.exports = HomeController