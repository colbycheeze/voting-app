FlowRouter.route('/', {
  name: 'home',
  action: function(params) {
    FlowLayout.render('appLayout', { header: 'header', content: 'home', footer: 'footer' });
  }
});
