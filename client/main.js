Meteor.subscribe('media');
Template.media_list.media = function(){
  return Media.find();
}

Template.new.rendered = function(){
  if(!Session.get('city')){
    Session.set('city', 'San Pedro Sula')
    /*
    navigator.geolocation.getCurrentPosition(function(position){
      var data = {lat: position.coords.latitude, lon: position.coords.longitude};
      var res = Meteor.call('reverseGeocode', data, function(res){
        console.log(res);
        Session.set('coords', position.coords);
        Session.set('city', res.city);
      });
    });
    */
  }
}

Template.new.city = function(){
  return Session.get('city') ;
}

Template.media_list.rendered = function(){
  var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
  elems.forEach(function(html) {
    var switchery = new Switchery(html);
  });
}

function getSelectedMedia(){
  var media = [];
  $(".media-checkbox").each(function(i,e){
    if($(e).prop("checked")) media.push($(e).data('medium-name')); 
  });
  return media;
}

Template.media_list.events({
  'change #all_media': function(){
    var $this = $("#all_media")[0];
    if($this.checked){
      $(".media-contact").each(function(i,e){
        if(!$(e)[0].checked) $(e).trigger('click');
      })
    }else{
      $(".media-contact").each(function(i,e){
        if($(e)[0].checked) $(e).trigger('click');
      })
    }
  }
});

Template.new.events({
  'click #snap': function(){
    MeteorCamera.getPicture(function(error, data){
		$("#preview").attr({src: data});	
    }); 	  
  }
  ,'click #save': function(){
    var data = {
      description: $("#description").val(),
      image_data: $("img#preview").attr('src'),
      media: getSelectedMedia(),
      isAnonymous: $("#isAnonymous").prop("checked")
    };
    //TODO: get this from the native location services?
    data.city= Session.get('city');
    data.coords = Session.get('coords');
    Meteor.call('createReport', data, function(){
      Router.go('/reports');
    });
  }
});
