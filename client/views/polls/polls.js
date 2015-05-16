Template.Polls.helpers({
  polls: function () {
    Polls.find({ userId: Meteor.userId() });
  }
});

Template.Polls.events({
'click button.submit-new-poll': function () {
  FlowRouter.go('/submit');
}
});