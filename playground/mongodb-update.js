const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB servers');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: ObjectId("5c765a841418aa6aab694893")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false 
    // }).then((result) => {
    //     console.log(result);
    // });


    db.collection('Users').findOneAndUpdate({
        _id: ObjectId("5c755b4251d2a805c82d827c")
    }, {
        $set: {
            name: 'Tim'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false 
    }).then((result) => {
        console.log(result);
    });
    // client.close();
});
