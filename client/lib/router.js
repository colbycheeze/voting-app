function redirectAfterLogin(path, next) {
  var redirectPath = (Meteor.userId()) ? "/polls" : null;
  next(redirectPath);
}

function requiredLogin(path, next) {
  var redirectPath = (!Meteor.userId())? "/" : null;
  next(redirectPath);
}

Accounts.onLogin(function () {
  FlowRouter.go('polls');
});

FlowRouter.notFound = {
  name: 'not_found',
  action: function() {
    FlowLayout.render('appLayout', { header: 'header', content: '404', footer: 'footer' });
  }
};

FlowRouter.route('/', {
  name: 'home',
  middlewares: [redirectAfterLogin],
  action: function() {
    FlowLayout.render('appLayout', { header: 'header', content: 'Home', footer: 'footer' });
  }
});

FlowRouter.route('/login', {
  name: 'login',
  middlewares: [redirectAfterLogin],
  action: function() {
    FlowLayout.render('appLayout', { header: 'header', content: 'Login', footer: 'footer' });
  }
});

FlowRouter.route('/polls', {
  subscriptions: function(params) {
    this.register('allPolls', Meteor.subscribe('allPolls'));
  },
  name: 'polls',
  action: function() {
    FlowLayout.render('appLayout', { header: 'header', content: 'Polls', footer: 'footer' });
  }
});

FlowRouter.route('/submit', {
  name: 'submit',
  middlewares: [requiredLogin],
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'newPoll', footer: 'footer' });
  }
});

FlowRouter.route('/polls/:id', {
  name: 'poll',
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'Poll', footer: 'footer' });
  }
});
