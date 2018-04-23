// 监听
// 整个监听只会运行一次，保存加载不会重复编译
module.exports = app => {
  app.once('server', server => {
    // 一个worker进程只会触发一次
    console.log('the server is running')
  })

  app.on('error', (err, ctx) => {
    console.log('the server is error')
  })

  // 全局监听 req 和 res
  app.on('request', ctx => {
    console.log('request')
  })

  app.on('response', ctx => {
    console.log('response')
  })

  app.params = 'hello world'
}