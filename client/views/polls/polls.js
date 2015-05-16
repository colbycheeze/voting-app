Template.Polls.helpers({
  polls: function () {
    return Polls.find();
  }
});

  Template.Polls.events({
    'click button.submit-new-poll': function () {
      // increment the counter when button is clicked
      FlowRouter.go('/submit');
    }
  });