Router.route('/', function(){
  this.render('reports')
});

Router.route('/reports');

Router.route('/reports/:_id', function(){
  this.render('show_report', {
    data: function(){
      return Reports.findOne({_id: this.params._id})
    }
  })
}, {name: "report.show"})

Router.route('/new');
