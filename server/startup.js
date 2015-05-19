var mode = process.env.NODE_ENV;
ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: Meteor.settings[mode].google.clientId,
      loginStyle: "popup",
      secret: Meteor.settings[mode].google.secret
    }
  }
);
