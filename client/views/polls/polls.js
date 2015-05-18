Template.Polls.helpers({
  polls: function () {
    return Polls.find();
  }
});

Template.PollItem.events({
  'click button.btn-danger': function (e, tmpl) {
    e.preventDefault();
    Polls.remove({_id: this._id});
  },
});

Template.PollItem.helpers({
  owner: function() {
    return this.userId == Meteor.userId();
  }
});
