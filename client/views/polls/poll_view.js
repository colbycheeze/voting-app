Template.Poll.helpers({
  poll: function() {
    return Polls.findOne();
  },

  totalVotes: function() {
    return Polls.findOne().totalVotes();
  },

  percentOfTotal: function(numVotes) {
    return Polls.findOne().percentOfTotal(numVotes);
  }

});
