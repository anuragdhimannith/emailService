const express = require('express');
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);
const app = express();

	
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 8888;
app.listen(PORT);
