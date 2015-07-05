Router.route('/', function(){
  this.render('reports');
});

Router.route('/reports');
Router.route('/new', function(){ this.render('add'); });
