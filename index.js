const express = require('express')
const cors = require('cors')
const feedbacks = require('./model/Feedback')
const connectDb = require('./db/db')

const app = express()

const port = process.env.PORT || 5000

app.use(cors())

connectDb()

app.get("/feedbacks",async (req, res) => {
  const feedback = await feedbacks.find({}) 
  res.send(feedback);
});

app.listen(port, () => console.log(`Server runing at PORT ${port}`));
