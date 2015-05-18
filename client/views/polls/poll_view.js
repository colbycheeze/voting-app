Template.Poll.helpers({
  poll: function() {
    return Polls.findOne();
  },
  vote: function() {
    return Votes.findOne();
  }
});
