const nodemailer = require('nodemailer')

const {UserModel} = require('../models/CommonModel');

const loginpage = (req,res) => {
    if(res.locals.users){
        return res.redirect('/admin')
    }
    return res.render('login')
}

const registerpage = (req,res) => {
    return res.render('register')
}

const dashboardpage = (req,res) => {
    return res.render('dashboard')
}

//register user
const register = async(req,res) => {
    try{
       const user = await UserModel.create(req.body);
       console.log("User create");
       return res.redirect('/')
    }catch(err){
        console.log(err);
        return false;
    }
}

//login user 
const loginUser = (req,res) => {
    try{
        return res.redirect('/admin')
    }catch(err){
        console.log(err);
        return false;
    }
}

//logout user
const logout = (req,res) => {
    req.logout((err)=>{
       if(err){
        console.log(err);
        return false
       }
       return res.redirect('/')
    })
   
}

const forgotPassword = async(req,res) => {
    try{
       let user = await UserModel.findOne({email : req.body.forgotpass});
       if(user){
        const otp = Math.floor(Math.random()*10000);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rwn3developer11@gmail.com',
              pass: 'uyju gprb hrgu ndcj'
            }
          });
          
          var mailOptions = {
            from: 'rwn3developer11@gmail.com',
            to:  req.body.forgotpass,
            subject: 'Forgot Password',
            text: `Hello ${req.body.forgotpass} your otp :- ${otp}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              res.cookie('user',{email : req.body.forgotpass,otp : otp});
                return res.redirect('/otp');
            }
          });
       }else{
        console.log("Email is Not Found");
        return res.redirect('/')
       }

    }catch(err){
        console.log(err);
        return false;
    }
}
const otp = (req,res) => {
    return res.render('otp');
}

const otpPost = async(req,res) => {
    try{
        if(req.cookies.user.otp == req.body.otp){
            console.log("otp is matched");
            return res.redirect('/newpassword')
        }else{
            console.log("otp is wrong");
            return res.redirect('/otp')
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

const newpassword = (req,res) => {
    return res.render('newpassword')
}


const newpasswordPost = async(req,res) => {
    try{
        let email = req.cookies.user.email;
        console.log(email);
        let user = await UserModel.findOneAndUpdate({email : email},{
            password : req.body.newpassword
        })
        console.log("password changed");
        return res.redirect('/')
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    loginpage,registerpage,dashboardpage,register,loginUser,logout,forgotPassword,otp,otpPost,newpassword,newpasswordPost
}


// email : rwn3developer11@gmail.com
// password : -uyju gprb hrgu ndcj