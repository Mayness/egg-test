module.exports = app => {
  const { router, controller } = app
  router.post('/form', controller.form.capture)
  router.post('/upload', controller.form.upload)
};