Polls = new Mongo.Collection("Polls");

this.Schemas || (this.Schemas = {});
this.Schemas.Polls = new SimpleSchema({
  pollName: {
    type: String,
    label: 'Poll Title'
  },
  pollValues: {
    type: [String],
    label: 'pollValues'
  }

});

Polls.attachSchema(this.Schemas.Polls);

/*Schemas.Checklist = new SimpleSchema({
    name: { type: String },
    releaseCreation: { type: Array, optional: true },
    'releaseCreation.$': { type: Object },
    'releaseCreation.$.index': { type: Number },
    'releaseCreation.$.description': { type: String },
    'releaseCreation.$.completed': { type: Boolean }
});*/