module.exports = app => {
    const { router, controller } = app
    const route = app.middleware.route.debug
    router.get('/', route, controller.home.index)
    // controller的第二种写法
    router.get('/news', 'news.list')
    router.post('/users', controller.users.post)
}