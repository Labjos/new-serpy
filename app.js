require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const createError = require('http-errors');


// configs
require('./configs/hbs.config');
require('./configs/db.config');


const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

//setup

app.use(logger('dev'));
app.use(express.urlencoded());

app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
})


const routes = require('./configs/routes.config');
app.use('/', routes);

app.use((req, res, next) => next(createError(404, 'Ruta no Encontrada')));

app.use((error, req, res, next) => {
  if (error instanceof mongoose.Error.CastError && error.message.includes("_id")) {
    error = createError(404, 'Identificador no Encontrado');
  } else if (!error.status) {
    error = createError(500, error)
  };
  console.error(error)
  res.status(error.status).render(`errors/${error.status}`);
});


const port = 3000;
app.listen(port, () => console.info(`application running at port ${port}`));
