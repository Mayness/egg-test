module.exports = {
  async debug (ctx, next) {
    console.log('挂载在路由钩子上的中间件')
    await next()
  }
}