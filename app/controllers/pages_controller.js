var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();
var sys = require('sys')
var exec = require('child_process').exec;
var async = require('async');

PagesController.main = function() {
this.title = '';
var unix  = Math.round(new Date().getTime() / 1000);
async.parallel([
    function(callback) {
        exec("./shell.sh "+unix, function(error, f1_length) {
            if (error)
                return callback(error);
            callback(null, f1_length);
        });
    },
    function(callback) {
        exec("pwd", function(error, f2_length) {
            if (error)
                return callback(error);
            callback(null, f2_length);
        });
    },
    function(callback) {
        exec("pwd", callback);
    }
],
function(error, results) {
    /* If there is no error, then
       results is an array [f1_length, f2_length, f3_length] */
    if (error)
        return console.log(error);



console.log(results)
});





  this.render();

}

module.exports = PagesController;
