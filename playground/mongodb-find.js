const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB servers');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c7567e72e95617eb96b323a')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

//     db.collection('Todos').find().count().then((count) => {
//         console.log(`Todos count: ${count}`);
//     }, (err) => {
//         console.log('Unable to fetch Todos', err);
//     });

  db.collection('Users').find({name: 'Timbo'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
});

    // client.close();
});