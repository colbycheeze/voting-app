Meteor.startup(function () {
  if (!Polls.findOne()) {
    var userId, user;

    if(user = Meteor.users.findOne({usertitle: 'testUser'})) {
      userId = user._id;
    } else {
      userId = Accounts.createUser({usertitle: 'testUser', email: 'test@test.com', password: 'testtest'});
    }

    Polls.insert({
      userId: userId,
      title: 'Favorite ice cream',
      options: ['chocolate', 'vanilla', 'strawberry']
    });

    Polls.insert({
      userId: userId,
      title: 'Favorite soda',
      options: ['coke', 'pepsi', 'sprite']
    });

    Polls.insert({
      userId: userId,
      title: 'Favorite pokemon',
      options: ['pikachu', 'charmander', 'squirtle', 'bulbasaur']
    });
  }
});
