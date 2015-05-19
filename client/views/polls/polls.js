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
  },

  gravatar: function() {
    var user = Meteor.users.findOne({_id: this.userId});
    if (user) {
      var avatar = user.profile.avatar;
      if(avatar) {
        return avatar;
      }
    }

    return "https://d2q0qd5iz04n9u.cloudfront.net/_ssl/proxy.php/http/www.marketingpilgrim.com/wp-content/uploads/2012/11/Vote.png";
  }
});

