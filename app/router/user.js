module.exports = app => {
  const { router, controller } = app
  router.resources('users', '/users', app.middleware.route.uppercase, controller.users)
  router.resources('users', '/users/:pa', controller.users)
}