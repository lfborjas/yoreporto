Template.add.rendered = function(){
  var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
  elems.forEach(function(html) {
    var switchery = new Switchery(html);
  });
}

Template.add.events({
  'click #snap': function(){
    MeteorCamera.getPicture(function(error, data){
		$("#preview").attr({src: data});	
    }); 	  
  }	
});
