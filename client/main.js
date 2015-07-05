Meteor.subscribe('media');

Template.media_list.media = function(){
  return Media.find();
}

Template.add.rendered = function(){
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

Template.add.events({
  'click #snap': function(){
    MeteorCamera.getPicture(function(error, data){
		$("#preview").attr({src: data});	
    }); 	  
  }
  ,'click #save': function(){
    var data = {
      description: $("#description").val(),
      img_data: $("img#preview").attr('src'),
      media: getSelectedMedia(),
      isAnonymous: $("#isAnonymous").prop("checked")
    };
    //TODO: get this from the native location services?
    navigator.geolocation.getCurrentPosition(function(position){
      data.coords = position.coords;
      Meteor.call('createReport', data);
    });
  }
});
