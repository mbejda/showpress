var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Email = mongoose.SchemaTypes.Email;

var bcrypt = require('bcrypt');

var AccountSchema = new Schema({
  fid: { type:String},
  token :{type:String},
  page : {
    id : String,
    token : String
  }
});


module.exports = mongoose.model('Account', AccountSchema);