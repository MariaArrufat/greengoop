const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE

mongoose.set('debug', true)

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.f7sxf.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } 
  )
  .then(() => console.log('connection established'))
  .catch(console.log)

const Comment = mongoose.model('Comment', { name: String, date: String })

const comment = new Comment({ name: 'another comment', date: '20/02/21'})

comment.save().then( () => console.log('you posted a comment'))
