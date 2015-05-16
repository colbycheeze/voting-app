Template.header.events({
  'click [role="logout"]': function (e, tmpl) {
    Meteor.logout();
    e.preventDefault();
  },
});

Template.header.helpers({
});

/*****************************************************************************/
/* header Life Cycle Hooks */
/*****************************************************************************/
Template.header.onCreated(function (){
});

Template.header.onRendered(function (){
  this.subscribe('userData');
});

Template.header.onDestroyed(function (){
});

