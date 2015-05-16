Meteor.startup(function () {
  if (!Polls.findOne()) {
    var userId, user;

    if(user = Meteor.users.findOne({username: 'testUser'})) {
      userId = user._id;
    } else {
      userId = Accounts.createUser({username: 'testUser', email: 'test@test.com', password: 'testtest'});
    }

    Polls.insert({
      userId: userId,
      name: 'Favorite ice cream',
      options: ['chocolate', 'vanilla', 'strawberry']
    });

    Polls.insert({
      userId: userId,
      name: 'Favorite soda',
      options: ['coke', 'pepsi', 'sprite']
    });

    Polls.insert({
      userId: userId,
      name: 'Favorite pokemon',
      options: ['pikachu', 'charmander', 'squirtle', 'bulbasaur']
    });
  }
});
