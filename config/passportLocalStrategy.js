const passport = require('passport');

const passportLocal = require('passport-local').Strategy;

const {UserModel} = require('../models/CommonModel');

passport.use(new passportLocal({
    usernameField: "email"
}, async (email, password, done) => {
    try {
        let user = await UserModel.findOne({ email: email });
        if (!user || user.password != password) {
            console.log("Email and Password");
            return done(null, false);
        }
        return done(null, user)
    } catch (err) {
        console.log(err);
        done(null, false)
    }
}))

passport.serializeUser(async(user,done)=>{
    try{
        return done(null,user.id)
    }catch(err){
        console.log(err);
        return done(null,false)
    }
})

passport.deserializeUser(async(id,done)=>{
    try{
        let user = await UserModel.findById(id);  
        return done(null,user) 
    }catch(err){
        console.log(err);
        return done(null,false)
    }
})

passport.checkAuth = (req,res,next) => {
    if(req.isAuthenticated()){
        return next()
    }
    return res.redirect('/') 
}

passport.setAuth = (req,res,next) => {
    if(req.isAuthenticated()){
        res.locals.users = req.user
    }
    return next()
}

module.exports = passport; 