module.exports = app => {
  const mongoose = app.mongoose;
  const Scheme = mongoose.Scheme;
  
  const ArticleSchema = new Scheme({
    title: String,
    content: String
  })
  return mongoose.model('article', ArticleSchema)
}