var User = require('./Users/Users');

//create a new user called chris

var newUser = User({
  name: 'Karan',
  username: 'bNastyK',
  password: 'password',
  admin : true
});

//now checking our custom method

john.dudify(function(error, name) {
   if (error) throw error;
   
   console.log('Your new name is ' + name + ' bro');
});


//call the built-in save method to save the database
newUser.save(function(error) {
  if (error) throw error;
  console.log('User has saved and been created successfully!');
});


//finding all users in database
User.find({}, function (error, users) {
   if (error) throw error;
    
    console.log(users);
})
//find specific user

User.find({ username: 'bNastyK' }, function ( error, user) {
  if (error) throw error;
  console.log(user);
});

//get a user with id of 1

User.findById(1, function(err, user) {
  if (err) throw err;
  //show the one user
  console.log(user);
});

//find the user bnastyk
//update him to bfreshyk

User.findOneAndUpdate({username : 'bNastyK'}, {username : 'bFreshyK' }, function(error, user) {
   if (error) throw error;
   //we have the updated user returned to us
   console.log(user);
});


//remove user

User.findOneAndRemove({ username: 'bFreshyK' }, function(error) {
  if (error) throw error;
  //we have deleted the user
  console.log('User Deleted!');
});
