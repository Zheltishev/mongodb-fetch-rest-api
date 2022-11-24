const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8081;
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongodbURL = 'mongodb://localhost:27017';
const client = new MongoClient(mongodbURL);
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongodb = require('mongodb');

const start = async () => {
    try {
        await client.connect();

        client
            .db('test')
            .listCollections({ name: 'users' })
            .toArray((err, data) => {
                if (data.filter((e) => e.name === 'users').length == 0) {
                    client.db().createCollection('users');
                    const users = client.db().collection('users');
                    users.createIndex({ name: 'text' });
                }
            });
    } catch (err) {
        console.error(err);
    }
};

start();

app.listen(PORT, () => {
    console.log('Server has been started, port ', PORT);
});
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: `server works!`,
    });
});

app.get('/get-all-users', async (req, res) => {
    const users = client.db().collection('users');
    const allUsersInCollection = await users.find().toArray();

    res.json({
        data: allUsersInCollection,
    });
});

app.post('/get-search', async (req, res) => {
    const users = client.db().collection('users');
    const usersInSearch = await users
        .find({ name: new RegExp(req.body.data, 'i') })
        .toArray();

    res.json({
        data: usersInSearch,
    });
});

app.post('/post-user', jsonParser, async (req, res) => {
    const users = client.db().collection('users');
    await users.insertOne({ name: req.body.name, age: req.body.age });
    res.send('success');
});

app.delete('/delete-user/:id', async (req, res) => {
    const users = client.db().collection('users');
    const result = await users.deleteOne({
        _id: new mongodb.ObjectId(req.params.id),
    });
    res.send(result);
});

app.put('/change-user', async (req, res) => {
    const users = client.db().collection('users');
    await users.findOneAndUpdate(
        { _id: new mongodb.ObjectId(req.body.id) },
        { $set: { name: req.body.name, age: req.body.age } }
    );
    res.send('success');
});
