Template.Poll.helpers({
  poll: function() {
    return Polls.findOne();
  }
});
