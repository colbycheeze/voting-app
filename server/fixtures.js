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
      options: [
        {name: 'chocolate', votes: 3 },
        {name: 'strawberry', votes: 1 },
        {name: 'vanilla', votes: 5 }
     ]
    });

    Polls.insert({
      userId: userId,
      title: 'Favorite soda',
      options: [
        {name: 'coke', votes: 30 },
        {name: 'pepsi', votes: 15 },
        {name: 'sprite', votes: 5 }
     ]
    });

    Polls.insert({
      userId: userId,
      title: 'Favorite pokemon',
      options: [
        {name: 'pikachu', votes: 20 },
        {name: 'charmander', votes: 10 },
        {name: 'squirtle', votes: 5 }
     ]
    });
  }
});
