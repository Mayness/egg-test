module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.isIOS)
  router.get('/news', controller.news.list)
}