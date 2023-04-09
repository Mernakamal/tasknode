const mongodb = require('mongodb')
const mongoClient=mongodb.MongoClient
const connectionUrl='mongodb://127.0.0.1:27017'
const dbname ="project1"

/*mongoClient.connect(connectionUrl,(error,res1)=>{
if(error){

    return console.log('error has occured')
}
console.log("all perfect")
const db = res1.db(dbname)


db.collection('users').insertOne({

    name :'merna',
    age:25
},(error,data)=>{
    if(error){
        console.log('unable to insert data')
    }
    console.log(data.insertedId)
}



)
db.collection('users').insertMany(
    [
        {
            name:'ahmed',
            age:25
        },
        {
            name:'sameh',
            age:24
        },
        {
            name:'ali',
            age:25
        },
        {
            name:'mohamedl',
            age:24
        }
    ],(error,data)=>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedCount)
    }
)

db.collection('users').findOne({_id:mongodb.ObjectId("6432d024abd5971cf084880d")}
,(error,user)=>{
    if(error){
        console.log('unable to insert data')
    }
    console.log(user)
}

)
db.collection('users').find({age:24}).limit(3).toArray((error,users)=>{
    if(error){
        console.log('error ha s occured')
    }
    console.log(users)


})
db.collection('users').find({age:24}).limit(3).count((error,users)=>{
    if(error){
        console.log('error ha s occured')
    }
    console.log(users)


    
})
db.collection('users').updateOne({_id:mongodb.ObjectId("6432d024abd5971cf084880d")})


})*/
mongoClient.connect(connectionUrl,(error,res1)=>{
    if(error){
    
        return console.log('error has occured')
    }
    console.log("all perfect")
    const db = res1.db(dbname)
    
    
    db.collection('users').insertOne({
    
        name :'merna',
        age:25
    },(error,data)=>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
    }
)
db.collection('users').insertOne({
    
    name :'ahmed',
    age:25
},(error,data)=>{
    if(error){
        console.log('unable to insert data')
    }
    console.log(data.insertedId)
}
)
db.collection('users').insertMany(
    [
        {
            name:'ali',
            age:27
        },
        {
            name:'hosam',
            age:27
        },
        {
            name:'mohamed',
            age:27
        },
        {
            name:'hussein',
            age:27
        },
        {
            name:'ebrahim',
            age:27
        },
        {
            name:'aya',
            age:25
        },
        {
            name:'yara',
            age:25
        },
        {
            name:'samah',
            age:25
        },
        {
            name:'asma',
            age:25
        },
        {
            name:'soad',
            age:25
        }
    ],(error,data)=>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedCount)
    }
)
db.collection('users').find({age:27}).count((error,users)=>{
    if(error){
        console.log('error ha s occured')
    }
    console.log(users)


    
})
db.collection('users').find({age:27}).limit(3).count((error,users)=>{
    if(error){
        console.log('error ha s occured')
    }
    console.log(users)
  
})

db .collction('users').updateMany({age:27},{
    $inc:{age:4}
})
.then((data1)=>{console.log(data1.modifiCount)})
.catch((error)=>console.log(error))
db .collction('users').updateMany({},{
    $inc:{age:10}
}).then((data1)=>{console.log(data1.modifiCount)})
.catch((error)=>console.log(error))


db.collction('users').deletMany({age:41})
.then((data1)=>{console.log(data1.deletCount)})
.catch((error)=>console.log(error))

}
)



