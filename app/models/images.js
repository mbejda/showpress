var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Email = mongoose.SchemaTypes.Email;

var bcrypt = require('bcrypt');

var ImageScheme = new Schema({
  create: { type:String, default: Date.now},
  path :{type:String}
});


module.exports = mongoose.model('Image', ImageScheme);