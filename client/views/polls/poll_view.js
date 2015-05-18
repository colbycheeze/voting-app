Template.Poll.helpers({
  poll: function() {
    return Polls.findOne();
  },
  vote: function() {
    return Votes.findOne();
  },
  hasVoted: function() {
    if(!Meteor.userId())
      return true;

    var pollId = Polls.findOne();
    pollId = pollId ? pollId._id : undefined;

    return Votes.find({userId: Meteor.userId(), pollId: pollId}).count() > 0;
  }
});

Template.Poll.events({
  'click [data-action="vote"]': function (e, tmpl) {
    e.preventDefault();

    var pollId = Polls.findOne()._id;
    Votes.insert({option: this.valueOf(), userId: Meteor.userId(), pollId: pollId});
  }
});
