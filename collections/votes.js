Votes = new Mongo.Collection("Votes");

var schemas = this.Schemas || (this.Schemas = {});
this.Schemas.Votes = new SimpleSchema({
  userId: {
    label: "User Id",
    type: String,
  },

  pollId: {
    label: "Poll Id",
    type: String
  },

  option: {
    label: "Option",
    type: String
  }
});

Votes.attachSchema(this.Schemas.Votes);

Votes.allow({
  insert: function(userId, doc){
    //if the user is not logged in or they have already voted deny access.
    if(!userId || Votes.find({userId: userId, pollId: doc.pollId}).count() > 0) {
      return false;
    }
    return true;
  },
  update: function(userId, doc, fields, modifier){
    if(!userId && userId !== doc.userId) {
      return false;
    }
    return true;
  },
  remove: function(userId, doc){
    if(!userId && userId !== doc.userId) {
      return false;
    }
    return true;
  }
});

