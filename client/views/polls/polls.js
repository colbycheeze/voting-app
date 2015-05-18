Template.Polls.helpers({
  polls: function () {
    return Polls.find();
  }
});

Template.PollItem.events({
  'click button.btn-danger': function (e, tmpl) {
    e.preventDefault();
    //remove poll
  },
});
