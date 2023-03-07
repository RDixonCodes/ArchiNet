const ProjectController = require('../controllers/project.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = function(app){
    app.post('/api/projects/new', ProjectController.createProject);
    // app.put('/api/projects/:id/favorite', ProjectController.updateFavoriteProjects);
    app.get('/api/projects', ProjectController.getAllProjects);
    app.get('/api/projects/:id', ProjectController.getProject);
    app.put('/api/projects/:id/edit', authenticate, ProjectController.updateProject);
    app.delete('/api/projects/:id/delete', authenticate, ProjectController.deleteProject);
    app.put('/api/projects/likes/:id', ProjectController.getLikes);
    // app.put('/api/projects/favorite/:id', ProjectController.updateFavorite);
}