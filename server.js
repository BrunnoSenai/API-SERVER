import express from 'express';

const app = express();
app.use(express.json());

app.get('/users', (req, res) => { 
    //res.status(200).json(users)
    res.send('Ok, I am here.');
});

//ip 127.0.0.1:1234
app.listen(5000);