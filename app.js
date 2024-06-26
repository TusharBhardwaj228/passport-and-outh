require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/auth-route.js');


app.set('view engine', 'ejs');
app.use(express.json());
app.use('/auth', router);
app.get('/',(req,res)=>{
  res.render('home');
});

app.listen(3000,()=>{
  console.log('server is listening at port 3000');
})