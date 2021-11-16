import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

// initialize the app 
const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// connect server to database to Mongo

const CONNECTION_URL = "mongodb+srv://TammyGagliano:cree9633@cluster0.zphxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000; 

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // if connection is successful 
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    // if no successful 
    .catch((error) => console.log(`${error} did not connect`));





