const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');
const participantRoute = require('./routes/participant');
const countriesRoute = require('./routes/countries');
const coachesRoute = require('./routes/coaches');

dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db')
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/user', participantRoute);
app.use('/api/user', countriesRoute);
app.use('/api/user', coachesRoute);

app.listen(3000, () => console.log('Server Up and running'));