Template.browseProducts.rendered = function() {
    $('.browseContainer').hide().fadeIn('fast');
  
    var $container = $('.browseContainer');
    $container.imagesLoaded( function(){
      console.log("Images loaded");
    $container.masonry({
      itemSelector : '.productListItem'
    });
  });
}

$('.twitter-typeahead').bind('typeahead:select', function(ev, suggestion) {
  
});

Template.browseProducts.helpers({
  selected: function(event, suggestion, datasetName) {
    // event - the jQuery event object
    // suggestion - the suggestion object
    // datasetName - the name of the dataset the suggestion belongs to
    // TODO your event handler here
    Router.go('productDetails',{_id:suggestion._id});
  },
 /* teams: function() {
    return [
      {
        name: 'nba-teams',
        valueKey: 'name',
        //dataValueKey:'name',
        local: function() { 
          return Products.find().fetch();
          //return Products.find().fetch().map(function(it){ return it.name; });
       
        },
       // local: function() { return Products.find().fetch(); },
        header: '<h3 class="league-name">Products</h3>',
        template: 'team'
      },
      {
        name: 'nhl-teams',
        valueKey: 'name',
        local: function() { return Tags.find().fetch(); },
        header: '<h3 class="league-name">Tags</h3>',
        template: 'team'
      }
    ];
  },*/
  isActiveTag: function() {
    return this.name == Session.get('activeTag') ? 'isActiveTag' : '';
  },
  filterTags: function() {
    return Tags.find();    
  }
})

Template.browseProducts.events({
  'keyup .tt-input':function(e) {
    var t = e.target.value;
    try {
        t = JSON.parse(t);
    } catch (e) {
        return false;
    }
    e.target.value = t.name;
  },
  'click .clearFilters': function() {
    Session.set('activeTag','');
    Pages.set({
        filters:{}
      });
  },
  'click .filterTag': function() {
    if (Session.get('activeTag')==this.name) {
      Pages.set({
        filters:{sold:{$ne:true}}
      });
      Session.set('activeTag','');
    } else {
      Session.set('activeTag',this.name);
      Pages.set({
        filters:{tags:this.name,sold:{$ne:true}},
      });
    }
  }
})