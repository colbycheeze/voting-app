function redirectIfLoggedIn(path, next) {
  var redirectPath = (Meteor.userId()) ? "/polls" : null;
  next(redirectPath);
}

function requireLogin(path, next) {
  var redirectPath = (!Meteor.userId())? "/login" : null;
  next(redirectPath);
}


FlowRouter.notFound = {
  name: 'not_found',
  action: function() {
    FlowLayout.render('AppLayout', { header: 'Header', content: '404', footer: 'Footer' });
  }
};

FlowRouter.route('/', {
  name: 'home',
  subscriptions: function() {
    this.register('allPolls', Meteor.subscribe('allPolls'));
    this.register('userData', Meteor.subscribe('userData'));
  },
  action: function() {
    FlowLayout.render('AppLayout', { header: 'Header', content: 'Polls', footer: 'Footer' });
  }
});

FlowRouter.route('/login', {
  name: 'login',
  middlewares: [redirectIfLoggedIn],
  action: function() {
    FlowLayout.render('AppLayout', { header: 'Header', content: 'Login', footer: 'Footer' });
  }
});

FlowRouter.route('/polls/:id', {
  name: 'poll',
  subscriptions: function(params) {
    this.register('poll', Meteor.subscribe('poll', params.id));
    this.register('vote', Meteor.subscribe('vote', params.id));
  },
  action: function(params) {
    FlowLayout.render('AppLayout', { header: 'Header', content: 'Poll', footer: 'Footer' });
  }
});

FlowRouter.route('/polls', {
  name: 'polls',
  middlewares: [requireLogin],
  subscriptions: function() {
    this.register('pollsByUser', Meteor.subscribe('pollsByUser'));
    this.register('userData', Meteor.subscribe('userData'));
  },
  action: function() {
    FlowLayout.render('AppLayout', { header: 'Header', content: 'Polls', footer: 'Footer' });
  }
});

FlowRouter.route('/submit', {
  name: 'submit',
  middlewares: [requireLogin],
  action: function() {
    FlowLayout.render('AppLayout', { header: 'Header', content: 'newPoll', footer: 'Footer' });
  }
});

