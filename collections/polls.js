Polls = new Mongo.Collection("Polls");

Polls.helpers({
  totalVotes: function() {
    return Votes.find().count();
  },

  votesForOption: function(option) {
    return Votes.find({option: option}).count();
  },

  percentOfTotal: function(option) {
    var totalVotes = this.totalVotes();
    return (this.votesForOption(option) / this.totalVotes()) * 100;
  }

});

var schemas = this.Schemas || (this.Schemas = {});
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
    label: "Options",
    type:  [ String ]
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
