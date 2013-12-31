var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();
var sys = require('sys')
var exec = require('child_process').exec;
var child;

PagesController.main = function() {
  this.title = 'Locomotive'

// http://nodejs.org/api.html#_child_processes


// executes `pwd`
child = exec("wp core download", function (error, stdout, stderr) {
  sys.print('stdout: ' + stdout);
  sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});




  this.render();

}

module.exports = PagesController;
