Products = new Mongo.Collection('products');

Products.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

var Schemas = {};

Schemas.Products = new SimpleSchema({
    name: {
        type: String,
        label: "Name of pattern",
        max: 200
    },
    mainImageUrl: {
        type: String,
        optional: true
    },
    
});

Products.attachSchema(Schemas.Products);
