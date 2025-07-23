const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));






// Routes
app.use('/', studentRoutes);


app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
