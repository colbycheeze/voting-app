Polls = new Mongo.Collection("Polls");

this.Schemas || (this.Schemas = {});
this.Schemas.Polls = new SimpleSchema({
  userId: {
    label: "User Id",
    type: String,

    autoValue: function() {
      if ( this.isSet ){
        return this.value;
      } else {
        return Meteor.userId();
      }
    }
  },

  title: {
    type: String,
    label: 'Name Your Poll'
  },

  options: {
    type: [String],
    label: 'Options'
  }

});

Polls.attachSchema(this.Schemas.Polls);

Polls.allow({
  insert: function (userId, doc) {
    return userId === doc.userId;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return userId === doc.userId;
  },

  remove: function (userId, doc) {
    return userId === doc.userId;
  }
});


/*Schemas.Checklist = new SimpleSchema({
    name: { type: String },
    releaseCreation: { type: Array, optional: true },
    'releaseCreation.$': { type: Object },
    'releaseCreation.$.index': { type: Number },
    'releaseCreation.$.description': { type: String },
    'releaseCreation.$.completed': { type: Boolean }
});*/
