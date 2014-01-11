var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Account = require('../../app/models/account');
var FacebookStrategy = require('passport-facebook').Strategy;
var FB = require('fb');
var poster = require('poster');



var https = require('https'); //Https module of Node.js
var fs = require('fs'); //FileSystem module of Node.js
var FormData = require('form-data'); //Pretty multipart form maker.
 
 




passport.use(new FacebookStrategy({
    clientID: '565900100152692',
    clientSecret: '13f46d347cc44786379e223c97972540',
    callbackURL: "/auth/fb/callback",
            passReqToCallback: true

  },
  function(req, accessToken, refreshToken, profile, done) {

    FB.setAccessToken(accessToken);

var uid = profile.id;
console.log(profile.id)


FB.api(profile.id+'/accounts', {}, function (res) {
  console.log(res)
  var data = res.data;
  var auth = {id:'',token:''};
  for(var i = 0; i < data.length; i++)
  {
        var page = data[i];
    console.log(page.name)

    var pn = page.name.toLowerCase();
    if(pn === 'webshoty')
    {
      auth.id = page.id;
      auth.token = page.access_token;




     var d = { fid: uid, token: accessToken, page : {id:auth.id,token:auth.access_token} };



    Account.update({'fid':profile.id}, d , { upsert: true },function(e,r){
      console.log(r)
      console.log(e)
return done(null,r)
    })
    }
  }



   
});
}



  
));


// Passport session setup.

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  Account.findById(id, function (err, user) {
    done(err, user);
  });
});
