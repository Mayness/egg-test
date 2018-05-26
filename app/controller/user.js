const Controller = require('egg').Controller;

class userController extends Controller {
  async index () {
    const ctx = this.ctx;
    // const res = ctx.model.User(ctx.query).save()
    // const res = await ctx.model.User.find({})
    console.log(ctx.model)
    ctx.body = 1
  }
}

module.exports = userController