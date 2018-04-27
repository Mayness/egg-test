module.exports = app => {
    const { router, controller } = app
    const debug = app.middleware.route.debug
    router.get('/', debug, controller.home.index)
    require('./router/news')(app)
    require('./router/user')(app)
    require('./router/form')(app)
}