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

    data.created_at = new Date();
    var id = Reports.insert(data);

    var url = "/reports";
    var author = data.isAnonymous ? "Anónimo" : data.author;

    //FIXME: this is an abject hack
    var judges = {
      "HCH": "byron@acklenavenue.com",
      "El Heraldo": "ricardo_irias@amazylia.com",
      "La Tribuna": "mackay3@gmail.com",
      "La Prensa": "homerorz@hotmail.com",
      "Abriendo Brecha": "jagbolanos@gmail.com",
      "Frente a Frente": "alfredo.jones@movitext.com"
    };

    this.unblock();
    data.media.forEach(function(medium){
      //TODO: store actual emails    
      var username = medium.replace(/\s*/g, '');
      var email = judges[medium];
      Email.send({
        to: email,
        bcc: "luisfborjas+"+username+"@gmail.com",
        from: "reportajes@yoreporto.com",
        subject: "Nuevo reportaje ciudadano",
        text: author+" dice \""+data.description + "\"\n vea el reportaje en " + url
      });
    });
  }
});
