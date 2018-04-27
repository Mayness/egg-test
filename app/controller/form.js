const { Controller } = require('egg')
const path = require('path')
const sendToWormhole = require('stream-wormhole')

class formController extends Controller {
  async capture() {
    if (this.ctx.request.body.name) {
      this.ctx.body = this.ctx.request.body
    } else {
      this.ctx.redirect('/')
    }
  }


  async upload() {
    const { ctx, logger } = this
    const stream = await ctx.getFileStream();
    const name = 'egg-multipart-test/' + path.basename(stream.filename);
    // 文件处理，上传到云存储等等
    let result;
    try {
      result = await ctx.oss.put(name, stream);
    } catch (err) {
      // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
      await sendToWormhole(stream);
      throw err;
    }
    ctx.body = {
      url: result.url,
      // 所有表单字段都能通过 `stream.fields` 获取到
      fields: stream.fields,
    };
  }
}

module.exports = formController

{/* <div>
      <form action="/form" id="form1" method="post">
        <div>
          <label for="name">姓名</label>
          <input id="name" name="name"/>
        </div>
        <button onclick="document.getElementById('form1').submit()">提交</button>
      </from>
    </div> */}