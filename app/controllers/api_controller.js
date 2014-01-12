var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var ApiController = new Controller();
var sys = require('sys')
var exec = require('child_process').exec;
var webshot = require('webshot');
var easyimg = require('easyimage');
///apt-get install imagemagick
var async = require('async');
var Account = require('../models/account');
var Img = require('../models/images');
var fs = require('fs');
var FB = require('fb');
var linkscrape = require('linkscrape');
var request = require('request');
var workerFarm = require('worker-farm')
  , workers    = workerFarm(require.resolve('./child'));


var options = {
     windowSize: {
                    width: 1200,
                    height: 800
                },
                shotSize: {
                    width: 'all',
                    height: 'all'
                }
}

function getLinks(url,cb)
{
    console.log(url)
    request(url, function(err, resp, body){
        if(err)
        {
            console.log(err)
            cb(err,null)
            return;
        }
linkscrape(url, body, function(links, $){
cb(null,links)
})
})
}

function makeSnapShot(url,cb)
{
    console.log(url)
    console.log('HERE')
var unix = Math.round(new Date().getTime()) / 1000;
var name = unix+'.png';
var thumbnail = 'public/shots/thumbnails/'+name;
var thumbnailOutput = 'shots/thumbnails/'+name;
var regular = 'public/shots/'+name;
var regularOutput = 'shots/'+name;


    webshot(url, regular,options, function(err) {
    if(err)
    {
    // self.res.send({type:'error',response:err});
    cb(err,null);
    return;
    }
    cb(null,regular);

})
}
function uploadFB(image,cb)
{

    Account.findOne().exec(function(e,r){
        if(e)
        {
            cb(e,null)
            return;
        }
var page = r.page
try{
var imgURL="http://webshoty.com/"+image;//change with your external photo url
FB.api('/'+page.id+'/photos', 'post', {
    url:imgURL,
access_token:page.token
}, function(response){

console.log(response)
cb(null,image)
return;
});
}catch(e)
{
    console.log(e)

cb(null,image)
return;
        // self.res.send({type:'success',response:regularOutput});
}
})
}




ApiController.get = function() {
var self = this;
Account.findOne().exec(function(e,r){

var page = r.page
try{
FB.api('/'+page.id+'/photos', {access_token:page.token}, function(response){

console.log(response)
   self.res.send({type:'success',results:response.data});

return;

});
}catch(e)
{
    console.log(e)
         self.res.send({type:'error',response:e});

}

})


}


ApiController.create = function() {
    var self = this;
    var url = self.param('url');
request(url, function (err, resp) {
   if (resp.statusCode === 200) {
      


         Account.findOne().exec(function(e,r){
  workers(url,r.page, function (err, outp) {
    console.log(outp);
    console.log(err)
      workerFarm.end(workers)
        self.res.send({type:'success',response:'done'})


  })
})
            }else{

                    self.res.send({type:'error',response:'url doesnt exist'})    
            }

});
}

module.exports = ApiController;
