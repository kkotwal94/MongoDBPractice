var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myappdatabase');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

//custom method
userSchema.methods.dudify = function() {
    this.name = this.name + '-dude';
    return this.name;
};

userSchema.pre('save', function(next) {
  //get current date
  var currentDate = new Date();
  //change theupdated at field
  this.updated_at = currentDate;
  //if created at isnt done yet
  if(!this.created_at)
     this.created_at = currentDate;

  next();
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
