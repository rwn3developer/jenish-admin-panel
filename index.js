const express = require('express');

const port = 8000;

const app = express();

const path = require('path')

app.set('view engine','ejs') 

const db = require('./config/db');

const cookieParser = require('cookie-parser')

app.use(express.static(path.join(__dirname,'public'))) 

app.use(cookieParser());

const passport = require('passport');
const passportLocal = require('./config/passportLocalStrategy');
const session = require('express-session');

app.use(session({
    name : 'milansir',
    secret : "mahadev",
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge : 1000*60*60*24
    }
}))

app.use(express.urlencoded())

app.use(passport.initialize()); 
app.use(passport.session())
app.use(passport.setAuth)

app.use('/',require('./routes'));


app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);
})