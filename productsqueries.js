//1. Find all the information about each products
db.products.find().toArray()


//2. Find the product price which are between 400 to 800
db.products.find({product_price:{$gt:400,$lt:800}})


//3.Find the product price which are not between 400 to 600

db.products.find({product_price:{$not:{$gt:400,$lt:600}}}).toArray()


//4.  List the four product which are grater than 500 in price 
db.products.find({product_price:{$gt:500}}).limit(4)


//5. Find the product name and product material of each products
db.products. find().forEach(function(pro){print("product_name:",pro.product_name,  
 "product_material",pro.product_material)})

//6. Find the product with a row id of 10
db.products.find({id:'10'})

//7. Find only the product name and product material
db.products.aggregate([ { $project:{  product_name:1,  product_material:1 }}]).toArray()

//8. Find all products which contain the value of soft in product material
db.products.find({product_material:"Soft"}) 

//9. Find products which contain product color indigo  and product price 492.00
db.products.find({$and:[{product_color:'Indigo'},{product_price:492.0}]})

//10. Delete the products which product price value are same


db.products.aggregate(   [ {   $group: { _id: "$product_price", samevalue: { $push: "$_id" },
 count: { $sum: 1 } }, },  { $match: { count: { $gt: 1 } } }, ] )


db.products.aggregate([ { $project:{  product_name:1,  product_material:1 }}]).toArray()

  