Router.route('/', function(){
  this.render('reports');
});

Router.route('/reports', function(){
  this.render('reports');
  Session.set('itemsLimit', ITEMS_INCREMENT);
  $("#add").hide();
});
Router.route('/new', function(){ 
  this.render('add'); 
  $("#reports").hide();
});
