const Controller = require('egg').Controller

class HomeController extends Controller{
  async isIOS () {
    this.ctx.body = `isIOS: ${this.ctx.isIOS}`
  }
}

module.exports = HomeController