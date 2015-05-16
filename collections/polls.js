Polls = new Mongo.Collection("Polls");

this.Schemas || (this.Schemas = {});
this.Schemas.Polls = new SimpleSchema({

  title: {
    type: String,
    max: 100
  },
  options: {
    type: String,
    max: 200
  }
});

Polls.attachSchema(this.Schemas.Polls);
