// options: config中对应
module.exports = (options, app) => {
  return async function addStringMiddleware (ctx, next) {
    ctx.pa = options.pa
    await next()
  }
}