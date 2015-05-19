Accounts.onCreateUser(function(options, user) {
  var email = Gravatar.cleanString(options.email);
  var hash = Gravatar.hash(email);
  var url = Gravatar.imageUrl(hash);

  user.profile = {gravatarUrl: url};
  return user;
});
