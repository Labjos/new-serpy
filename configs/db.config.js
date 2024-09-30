const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongo://localhost:27017//Serpy'

mongoose.connect(MONGODB_URI)
.then(() => console.info(`Successfully connect to the database - modo prueba ${MONGODB_URI}`))
.catch((error) => console.error(`An error ocurred to connect to the database Solo Prueba ${MONGODB_URI}`))