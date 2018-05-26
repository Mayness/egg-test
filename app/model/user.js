module.exports = app => {
  const mongoose = app.mongoose;
  const Scheme = mongoose.Scheme;
  
  const User = new Scheme({
    userName: {type: String},
    password: {type: String},
  })
  return mongoose.model('user', User)
}
