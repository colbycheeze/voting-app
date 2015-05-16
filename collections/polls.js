Polls = new Mongo.Collection("Polls");
Schema = {};
Schema.Polls = new SimpleSchema({
  title: {
    type: String,
  },
  options: {
    type: String
  }
});




