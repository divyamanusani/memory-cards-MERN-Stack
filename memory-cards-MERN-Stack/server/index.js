const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const postRoutes = require('./routes/posts.js');

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/posts', postRoutes);

app.get('/',(req,res)=>{
    res.send('Welcome to Memories Page!!!!');
})

const PORT = process.env.PORT || 5000;


// { useNewUrlParser: true, useUnifiedTopology: true }
// this is optional but is used to void later errors in console

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true ,useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Server running on PORT ' + PORT)))
    .catch((error) => console.log('heyyy',error.message));

mongoose.set('useFindAndModify', false);
