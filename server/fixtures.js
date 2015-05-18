Meteor.startup(function () {
  if (!Polls.findOne()) {
    var userId = Accounts.createUser({usertitle: 'testUser', email: 'test@test.com', password: 'testtest'});

    var pollId = Polls.insert({
      userId: userId,
      title: 'Favorite ice cream',
      options: ['chocolate', 'vanilla', 'strawberry']
    });

    var voteId = Votes.insert({
      userId: userId,
      pollId: pollId,
      option: 'chocolate'
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
