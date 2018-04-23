const { app } = require('egg-mock/bootstrap')

describe('test/controller/user.test.js ', () => {
  it('should right', async () => {
      await app.httpRequest()
      .post('/users')
      .expect(200)
  })
})