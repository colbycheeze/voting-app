AutoForm.hooks({
  'newPollForm': {
    onSuccess: function(formType, result) {
      FlowRouter.go('poll', {id: result});
    }
  }
});
