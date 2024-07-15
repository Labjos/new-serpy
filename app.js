const express = require('express');




// configs
require('./configs/hbs.config');



const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`)


const routes = require('./configs/routes.config');
app.use('/', routes)


const port = 3000;
app.listen(port, () => console.info(`application running at port ${port}`));
