exports.index = async (ctx) => {
  ctx.body = {
    type: 'index',
    method: 'GET',
    params: ctx.params
  }
};

exports.new = async (ctx) => {
  ctx.body = {
    type: 'new',
    method: 'GET',
    params: ctx.params
  }
};

exports.create = async (ctx) => {
  ctx.body = {
    type: 'create',
    method: 'POST',
    params: ctx.params
  }
};

exports.show = async (ctx) => {
  ctx.body = {
    type: 'show',
    method: 'GET',
    params: ctx.params
  }
};

exports.edit = async (ctx) => {
  ctx.body = {
    type: 'edit',
    method: 'GET',
    params: ctx.params
  }
};

exports.update = async (ctx) => {
  ctx.body = {
    type: 'update',
    method: 'PUT',
    params: ctx.params
  }
};

exports.destroy = async (ctx) => {
  ctx.body = {
    type: 'destroy',
    method: 'DELETE',
    params: ctx.params
  }
};