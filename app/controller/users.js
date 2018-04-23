// exports.index = async (ctx) => {
//   ctx.body = `hello user`
// }
const Controller = require('egg').Controller

class userController extends Controller {
  async post() {
    this.ctx.body = '新增成功'
  }
}

module.exports = userController

// exports.create = async (ctx) => {
//   ctx.body = '新增成功'
// }