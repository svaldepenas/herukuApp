const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Initialize Express

const app = express();

// Server Settings

app.set('port', process.env.PORT || 5000);

// Middlewares

app.use(morgan("dev"));
app.use(cors());

// Routes

app.use('/', require('./routes/index'));
app.use('/api/users', require('./routes/user'));

// Start server

app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});