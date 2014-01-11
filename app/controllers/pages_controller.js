var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();
var sys = require('sys')
var exec = require('child_process').exec;
var async = require('async');
var walk    = require('walk');
var files   = [];
var passport = require('passport');



PagesController.main = function() {
var self = this;
var walker  = walk.walk('public/shots/thumbnails', { followLinks: false });
self.files = [];
walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    self.files.push( {thumbnail:'/shots/thumbnails/' + stat.name, regular:'/shots/' + stat.name});
    next();
});

walker.on('end', function() {

      self.render();

});






}
PagesController.fb = function() {

}
PagesController.callback = function() {
	console.log('CALLBACK')
	this.res.redirect('/')
}

PagesController.before('fb', passport.authorize('facebook',{scope:['manage_pages','publish_stream','user_photos','photo_upload']}));
PagesController.before('callback', passport.authorize('facebook', { failureRedirect: '/',successRedirect:'/' }));

module.exports = PagesController;
