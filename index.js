const express = require('express')
const cors = require('cors')
const feedbacks = require('./model/Feedback')
const connectDb = require('./db/db')

const app = express()

app.use(cors())

connectDb()

app.get("/feedbacks",async (req, res) => {
  const feedback = await feedbacks.find({}) 
  res.send(feedback);
});


app.listen(5000, () => console.log(`Server runing at PORT ${5000}`));
