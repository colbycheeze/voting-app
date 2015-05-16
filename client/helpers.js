Template.registerHelper("currentFieldValue", function (fieldName) {
return AutoForm.getFieldValue("reactiveCurrentValueForm", fieldName) || "not selected";
});

Template.registerHelper("currentFieldValue2", function (fieldName) {
return AutoForm.getFieldValue(fieldName) || "empty";
});

