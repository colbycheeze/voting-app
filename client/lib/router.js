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
