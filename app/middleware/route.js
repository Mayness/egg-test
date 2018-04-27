module.exports = {
  async debug (ctx, next) {
    console.log('挂载在路由钩子上的中间件')
    await next()
  },
  async uppercase(ctx, next) {
    ctx.params.id = ctx.params.id && ctx.params.id.toUpperCase()
    await next()
  }
}