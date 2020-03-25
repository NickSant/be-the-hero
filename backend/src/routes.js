const express = require('express'); //rotas

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentCotroller');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//desacoplando o modulo de rotas do express
const routes = express.Router();

//rotas nos controladores
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs' , OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents:id', IncidentController.delete);

    

//exportando variável
module.exports = routes;