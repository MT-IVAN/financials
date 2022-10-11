const mongoose = require('mongoose')
const { app } = require('./index')
const Expen = require('./src/models/Expen')

;(async () => {
  try{
    await mongoose.connect('mongodb://root:example@localhost:27017/admin')
    console.log('mongo has been connected succesfully')
    
    app.listen(4000, async () => {
      console.log("app is running")
    })
  }
  catch(e){
    console.error(e);
  }
})()
