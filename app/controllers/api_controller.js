var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var ApiController = new Controller();
var sys = require('sys')
var exec = require('child_process').exec;
var webshot = require('webshot');
var easyimg = require('easyimage');
///apt-get install imagemagick
var needle = require('needle');
var Account = require('../models/account');
var Img = require('../models/images');

var fs = require('fs');
var FB = require('fb');



var options = {
     windowSize: {
                    width: 1024,
                    height: 768
                },
                shotSize: {
                    width: 'all',
                    height: 'all'
                }
}


ApiController.create = function() {
    var self = this;
    var url = self.param('url');
var unix = Math.round(new Date().getTime()) / 1000;
var name = unix+'.png';
var thumbnail = 'public/shots/thumbnails/'+name;
var thumbnailOutput = 'shots/thumbnails/'+name;

var regular = 'public/shots/'+name;
var regularOutput = 'shots/'+name;


webshot(url, regular,options, function(err) {
    if(err)
    {
     self.res.send({type:'error',response:err});
return;        
    }

    var II = new Img({path:regular});
II.save(function(e,r){
    if(e)
    {
             self.res.send({type:'error',response:e});
             return;

    }



Account.findOne().exec(function(e,r){

var page = r.page
try{


var imgURL="http://webshoty.com/"+regularOutput;//change with your external photo url
FB.api('/'+page.id+'/photos', 'post', {
    url:imgURL,
access_token:page.token
}, function(response){

console.log(response)
   self.res.send({type:'success',image:regularOutput});

return;

});
}catch(e)
{
    console.log(e)
         self.res.send({type:'success',response:regularOutput});

}

})

})





});


}

module.exports = ApiController;
