require('dotenv').config();

const express = require('express');


// configs
require('./configs/hbs.config');
require('./configs/db.config');


const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

//setup

app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
})


const routes = require('./configs/routes.config');
app.use('/', routes);


const port = 3000;
app.listen(port, () => console.info(`application running at port ${port}`));
