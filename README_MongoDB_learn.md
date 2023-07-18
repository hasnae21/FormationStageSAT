# Commandes sur mongosh :
> show dbs
> show collections

- create database :
> use <database-name>
- supprimer une base de donner :
> db.dropDatabase()

- create collection : 
> db.createCollection('<collection-name>')
- supprimer une collection:
> db.<collection-name>.drop()

- insert in the collection :
> db.clients.insertOne({nom:'Hasnae'})
> db.clients.insertOne({nom:"Hassan",age:27})

- show collection data :
> db.<collection-name>.find({})
>{ nom: 'Hassan', age: 27 }
- search by condition :
> db.<collection-name>.find({"age":23})
/*$and*/
> db.<collection-name>.find({$and:[{"age":24},{"city":"Tanger"}]})  
/*$or*/
> db.<collection-name>.find({$or:[{"age":24},{"city":"Tanger"}]})  


- delete one and delete many from collection :
> db.<collection-name>.deleteOne({"_id":ObjectId('64b55c46ae84157d72e9375b')})
> db.<collection-name>.deleteMany({"age": 62})
- Output: { acknowledged: true, deletedCount: <nombre-deleted> }

- search withing a condition :
<!--lease then -->
>  db.clients.find({"age":{$lt:23}})
<!--lease and equal then-->
> db.clients.find({"age": {$lte: 23}})  
<!--equal-->
> db.clients.find({"age":{$eq:23}})
<!--not equal-->
> db.clients.find({"age": {$ne: 23}})
<!--greater then-->
>  db.clients.find({"age":{$gt:23}})
<!--greater and equal  then-->
>  db.clients.find({"age":{$gte:23}})

- show a limited nbr of data : 
> db.clients.find({}).limit(4)

- count how many documnent you have in you collection :
>  db.clients.find({}).count()
- count how many documnent you have withing a condition :
> db.clients.find({age:{$gt:20}}).count()
