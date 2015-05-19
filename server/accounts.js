Accounts.onCreateUser(function(options, user) {
  var attachData, email, picture, profileImageUrl, profilePicture, url, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
  profileImageUrl = undefined;
  user.profile = user.profile || {};

  if ((_ref1 = user.services) !== undefined ? _ref1.google : undefined) {
    user.emails = [
      {
        address: user.services.google.email,
        verified: true
      }
    ];
    user.profile.firstName = user.services.google.given_name;
    user.profile.lastName = user.services.google.family_name;
    user.profile.avatar = user.services.google.picture;
  }

  if (!user.profile.avatar) {
    email = ((_ref8 = user.emails) !== undefined ? (_ref9 = _ref8[0]) !== undefined ? _ref9.address : undefined : undefined) || '';
    url = Gravatar.imageUrl(Gravatar.hash(email));
    user.profile = { avatar: url };
  }
  return user;
});
