const asyncController = require('./controllers/async');
const cannabisRoutes = require('./routes/cannabis');
const db = require('./models');
const ejsLayouts = require('express-ejs-layouts');
const express = require('express');
const methodOverride = require('method-override');
const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.get('/', asyncController.getHome);
app.use('/cannabis', cannabisRoutes);

app.listen(3000, () => console.log('listenin on port 3k'));