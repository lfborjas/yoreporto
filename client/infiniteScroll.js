//from: http://www.meteorpedia.com/read/Infinite_Scrolling
var ITEMS_INCREMENT = 3;
Session.setDefault('itemsLimit', ITEMS_INCREMENT);

Meteor.subscribe('reports', Session.get('itemsLimit'));

Template.reports.reports = function() {
  return Reports.find();
}

Template.reports.moreResults = function() {
    // If, once the subscription is ready, we have less rows than we
    // asked for, we've got all the rows in the collection.
    return !(Reports.find().count() < Session.get("itemsLimit"));
}
 
// whenever #showMoreResults becomes visible, retrieve more results
function showMoreVisible() {
    var threshold, target = $("#showMoreResults"), container = $(window);
    if (!target.length) return;
 
    threshold = container.scrollTop() + container.height() - target.height();
 
    if (target.offset().top < threshold) {
        if (!target.data("visible")) {
            // console.log("target became visible (inside viewable area)");
            target.data("visible", true);
            Session.set("itemsLimit",
                Session.get("itemsLimit") + ITEMS_INCREMENT);
        }
    } else {
        if (target.data("visible")) {
            // console.log("target became invisible (below viewable arae)");
            target.data("visible", false);
        }
    }        
}
 
// run the above func every time the user scrolls
$(window).scroll(showMoreVisible);
