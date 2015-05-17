Template.Polls.helpers({
  polls: function () {
    return Polls.find();
  }
});

Template.Polls.events({
  'click button.submit-new-poll': function () {
    FlowRouter.go('/submit');
  }
});

Template.PollItem.events({
  'click button.btn-danger': function (e, tmpl) {
    e.preventDefault();
    //remove poll
  },
});
