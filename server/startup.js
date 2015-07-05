Meteor.startup(function(){
  if( Reports.find().count() === 0){
    Reports.insert({
      created_at: new Date("2015-07-04 00:00:00"),
      description: "Fuera JOH!",
      image_url: "",
      author: "Juan Pérez",
      location: {type: "Point", coordinates: [
        87.2167, // longitude
        14.1000  // latitude
      ]}
    });
    Reports.insert({
      created_at: new Date("2015-07-04 00:01:00"),
      description: "Medidas sustitutivas para Lena Gutiérrez",
      image_url: "",
      author: null,
      location: {type: "Point", coordinates: [
        87.2167, // longitude
        14.1000  // latitude
      ]}
    });
    Reports.insert({
      created_at: new Date("2015-07-04 00:02:00"),
      description: "Honduras gana encuentro deportivo X",
      image_url: "",
      author: "Pedro Pablo",
      location: {type: "Point", coordinates: [
        88.0333, // longitude
        15.5000  // latitude
      ]}
    });
    Reports.insert({
      created_at: new Date("2015-07-04 00:03:00"),
      description: "AngelHack 2015 en SPS!",
      image_url: "",
      author: null,
      location: {type: "Point", coordinates: [
        88.0333, // longitude
        15.5000  // latitude
      ]}
    });
  }
})
