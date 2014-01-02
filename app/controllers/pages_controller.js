var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();
var sys = require('sys')
var exec = require('child_process').exec;
var async = require('async');

PagesController.main = function() {


  this.render();

}

module.exports = PagesController;
