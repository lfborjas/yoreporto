Meteor.startup(function(){
  //TODO: also dynamically add media
  if( Reports.find().count() === 0){
    Reports.insert({
      created_at: new Date("2015-07-04 00:00:00"),
      description: "GeekGirlMeetup es un éxito en Tegucigalpa",
      image_url: "",
      author: null,
      location: {type: "Point", coordinates: [
        87.2167, // longitude
        14.1000  // latitude
      ]}
    });
  }

  if( Media.find().count() === 0){
    Media.insert({
      name: "HCH",
      image_url: "img/medio01.jpg"
    });

    Media.insert({
      name: "El Heraldo",
      image_url: "img/medio02.jpg"
    });

    Media.insert({
      name: "La Tribuna",
      image_url: "img/medio03.jpg"
    });

    Media.insert({
      name: "La Prensa",
      image_url: "img/medio04.jpg"
    });

    Media.insert({
      name: "Abriendo Brecha",
      image_url: "img/medio05.jpg"
    });

    Media.insert({
      name: "Frente a Frente",
      image_url: "img/medio06.jpg"
    });
  }
})
