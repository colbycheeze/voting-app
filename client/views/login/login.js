/*****************************************************************************/
/* Login Life Cycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function (){
  this.autorun(function() {
    if (Meteor.userId()) {
      FlowRouter.go('polls');
    }
  });
});

