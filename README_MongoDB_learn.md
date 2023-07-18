# Commandes sur mongosh :
- show databases list:
> show dbs

-show collections list:
> show collections

- create database :
> use database-name

- supprimer une base de donner :
> db.dropDatabase()

- create collection : 
> db.createCollection('collection-name')

- supprimer une collection:
> db.collection-name.drop()

- insert in the collection :
> db.collection-name.insertOne({nom:'Hasnae'})
> db.collection-name.insertOne({nom:"Hassan",age:27})

- show collection data :
> db.collection-name.find({})

- search by condition :
> db.collection-name.find({"age":23})

- /*$and*/
> db.collection-name.find({$and:[{"age":24},{"city":"Tanger"}]})
- /*$or*/
> db.collection-name.find({$or:[{"age":24},{"city":"Tanger"}]})  


- delete one and delete many from collection :
> db.collection-name.deleteOne({"_id":ObjectId('64b55c46ae84157d72e9375b')})
> db.collection-name.deleteMany({"age": 62})
- Output: { acknowledged: true, deletedCount: nombre-deleted }

- search withing a condition :
<!--lease then -->
>  db.collection-name.find({"age":{$lt:23}})
<!--lease and equal then-->
> db.collection-name.find({"age": {$lte: 23}})  
<!--equal-->
> db.collection-name.find({"age":{$eq:23}})
<!--not equal-->
> db.collection-name.find({"age": {$ne: 23}})
<!--greater then-->
>  db.collection-name.find({"age":{$gt:23}})
<!--greater and equal  then-->
>  db.collection-name.find({"age":{$gte:23}})

- show a limited nbr of data : 
> db.collection-name.find({}).limit(4)

- count how many documnent you have in you collection :
>  db.collection-name.find({}).count()

- count how many documnent you have withing a condition :
> db.collection-name.find({age:{$gt:20}}).count()
