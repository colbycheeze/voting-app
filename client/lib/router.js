FlowRouter.route('/', {
  name: 'home',
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'Home', footer: 'footer' });
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'Login', footer: 'footer' });
  }
});

FlowRouter.route('/polls', {
  name: 'polls',
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'Polls', footer: 'footer' });
  }
});

FlowRouter.route('/polls/:id', {
  name: 'poll',
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'Poll', footer: 'footer' });
  }
});
