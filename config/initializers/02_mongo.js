var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webshoty',{db: {safe: true}});

var mongooseTypes = require("mongoose-types");
mongooseTypes.loadTypes(mongoose);