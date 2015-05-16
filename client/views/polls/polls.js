Template.Polls.onRendered(function (){
  this.subscribe('polls');
});

Template.Polls.helpers({
  polls: function () {
    return Polls.find({userId: Meteor.userId()});
  }
});

Template.Polls.events({
  'click button.submit-new-poll': function () {
    FlowRouter.go('/submit');
  }
});
