
rand = function(min,max,interval)
{
    if (typeof(interval)==='undefined') interval = 1;
    var r = Math.floor(Math.random()*(max-min+interval)/interval);
    return r*interval+min;
}

Meteor.startup(function () {
    Products.remove({});
    
  if ( Products.find().count() < 100 ) {
      console.log("insert");
    for (var i=0;i<200;i++) {
        console.log("insert " + i);
        Products.insert({name:"Number " + i, mainImageUrl:"http://loremflickr.com/" + rand(200,500,1) + "/" + rand(200,500,1)});
    }
  }
  
})