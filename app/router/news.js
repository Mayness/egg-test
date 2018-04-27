module.exports = app => {
  const { router, controller } = app
  // controller的第二种写法
  router.get('/news','news.list')
}