const { Controller } = require('egg')

class BaseController extends Controller {
  success (data) {
    this.ctx.body = {
      code: 200,
      data
    }
  }
}

module.exports = BaseController