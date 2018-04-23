const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        const { ctx, app, config } = this
        ctx.body = ctx.pa + app.params
    }
}

module.exports = HomeController