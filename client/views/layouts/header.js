Template.Header.events({
  'click [role="logout"]': function (e, tmpl) {
    Meteor.logout();
    e.preventDefault();
  }
});

Template.Header.onRendered(function (){
  this.subscribe('userData');
});
