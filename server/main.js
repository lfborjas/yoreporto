//from: http://www.meteorpedia.com/read/Infinite_Scrolling

Meteor.publish('reports', function(limit) {
  //TODO: filter nearby (cf. http://stackoverflow.com/questions/26348465/sort-users-by-distance-from-current-user-reactively-in-meteor)
  //TODO: calculate relevance score (date, proximity, votes)
  return Reports.find({}, { limit: limit });
});    

