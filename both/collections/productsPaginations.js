

// Pagination for Product feed
Pages = new Meteor.Pagination(Products, {
/*  auth: function(skip,sub) {
    if (!sub.userId) { return false; }
  
    var userSettings = Pages.userSettings[sub._session.id] || {};
    var _filters;
    var uFilters = userSettings.filters || this.filters;
    if (Roles.userIsInRole(sub.userId,'Admin')) {
      _filters = _.extend({}, uFilters,{})
    } else {
      _filters = _.extend({}, uFilters, {hidden:{$ne:true}})
    }
        var uFields = userSettings.fields || this.fields
        , uSort = userSettings.sort || this.sort
        , uPerPage = userSettings.perPage || this.perPage
        , _options = { fields: uFields, sort: uSort, limit: uPerPage, skip: skip };
    return [ _filters, _options ];   
  },*/
  itemTemplate: "productFeedItem",
  homeRoute:"/browseProducts",
  route: "/browseProducts",
  router: "iron-router",
  templateName:"browseProducts",
  routerTemplate: "browseProducts",
  routerLayout: "appLayout",
  perPage: 9,
  dataMargin:1,
 // filters:{hidden:{$ne:true}},
  infinite:true,
  infiniteTrigger:0.1,
  sort:{createdAt:-1},
  availableSettings: {filters: true,settings: true},
});
