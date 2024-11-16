require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contacts');
const db = require('./db'); // Connect to MongoDB

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
