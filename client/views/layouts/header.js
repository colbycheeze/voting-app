Template.Header.events({
  'click [role="logout"]': function (e, tmpl) {
    Meteor.logout();
    e.preventDefault();
  }
});

Template.Header.onCreated(function (){
  this.subscribe('userData');
});
