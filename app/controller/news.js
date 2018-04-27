const { Controller } = require('egg')

class newsController extends Controller {
    async list () {
        const data = {
            list: [
               {id: 1, title: 'news 1', url: '/news/1'},
               {id: 2, title: 'news 2', url: '/news/2'}
            ]
        }
        await this.ctx.render('news/list.tpl', data)
    }
}

module.exports = newsController