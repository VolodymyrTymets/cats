Template.appLayout.helpers({
  currentProduct: function() {
    //console.log("DATA: " + this.data);
    //console.log("This: " + JSON.stringify(Template.currentData()));
    var id = Session.get('currentProduct');
    console.log('id: ' + id);
    return Products.findOne({_id:id});
  },
  showProduct: function() {
    return Session.get('productDetailsOpen') == 'true';
  },
  showFilterBar:function() {
    var routeName = Router.current().route.getName();
    return routeName == "browseProducts";
  }
})