Polls = new Mongo.Collection("Polls");

Polls.helpers({
  totalVotes: function() {
    return _.reduce(this.options, function(sum, option) {
      return sum + option.votes;
    }, 0);
  },

  percentOfTotal: function(numVotes) {
    var totalVotes = this.totalVotes();
    return (numVotes / totalVotes) * 100;
  }

});

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
    label: 'Name Your Poll',
    type: String
  },

  options: {
    type: Array,
    optional: true,
  },
    'options.$': {type: Object},
    'options.$.name': {type: String},
    'options.$.votes': {
      type: Number,
      autoValue: function() {
      if ( this.isSet ){
        return this.value;
      } else {
        return Meteor.userId();
      }
 }}

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
