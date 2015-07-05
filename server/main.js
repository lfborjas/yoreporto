//from: http://www.meteorpedia.com/read/Infinite_Scrolling

Meteor.publish('reports', function(limit) {
  //TODO: filter nearby (cf. http://stackoverflow.com/questions/26348465/sort-users-by-distance-from-current-user-reactively-in-meteor)
  //TODO: calculate relevance score (date, proximity, votes)
  return Reports.find({}, { limit: limit });
});    

Meteor.publish('media', function(){return Media.find(); });

Meteor.methods({
  createReport: function(data){
    //TODO: do geocoding?
	/*
    data.location = {type: "Point", coordinates: [
      data.coords.longitude,
      data.coords.latitude
	]};
	*/

    if(data.isAnonymous){
      data.author = null;
    }

    data.media.forEach(function(medium){
      //do something. Deal with the "all" case?
    });

    data.created_at = new Date();

    Reports.insert(data);
  }
});
