const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/search', SearchController.index);
routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

module.exports = routes;