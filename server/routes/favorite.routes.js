const FavoriteController = require('../controllers/favorite.controller');
const { authenticate } = require("../config/jwt.config");
module.exports = function(app){
    app.post('/api/favorites/:id/new', FavoriteController.getFavoriteProjects);
    app.get('/api/favorites', FavoriteController.getAllFavorites);
    app.get('/api/favorites/:id', FavoriteController.getFavorite);
    app.delete('/api/favorites/:id/delete', authenticate, FavoriteController.deleteProject);
}