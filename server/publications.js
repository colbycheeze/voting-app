Meteor.publish('userData', function () {
  if (this.userId){
    return Meteor.users.find({_id: this.userId}, {fields: {'services.google.picture': 1}});
  } else {
    this.ready();
  }
});

Meteor.publish('poll', function(pollId) {
  return Polls.find({_id: pollId});
});

Meteor.publish('allPolls', function () {
  return Polls.find();
});

Meteor.publish('pollsByUser', function(userId) {
  return Polls.find({userId: userId || this.userId});
});

Meteor.publish('vote', function(pollId) {
  return Votes.find({pollId: pollId});
});
