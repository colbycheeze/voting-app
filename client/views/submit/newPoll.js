
Meteor.startup(function() {
	newPoll.registerHelper("currentFieldValue", function (fieldName) {
	  return AutoForm.getFieldValue("reactiveCurrentValueForm", fieldName) || "not selected";
	});

	newPoll.registerHelper("currentFieldValue2", function (fieldName) {
	  return AutoForm.getFieldValue(fieldName) || "empty";
	});

});