Template.Polls.helpers({
  polls: function () {
    Polls.find({ userId: Meteor.userId() });
  }
});
