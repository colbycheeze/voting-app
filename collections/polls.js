Polls = new Mongo.Collection("Polls");
Schema = {};
Schema.Polls = new SimpleSchema({
  title: {
  	name: title,
    type: String,
    max: 100
  },
  options: {
  	name: options,
    type: String,
    max: 200
  }
});




