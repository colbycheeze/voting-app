Polls = new Mongo.Collection("Polls");
Schema = {};
Schema.Polls = new SimpleSchema({
  title: {
    type: String,
    max: 100
  },
  options: {
    type: String,
    max: 200
  }
});




