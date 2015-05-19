Meteor.publish('userData', function () {
  return Meteor.users.find({}, {fields: {'profile.avatar': 1}});
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
