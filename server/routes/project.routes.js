const ProjectController = require('../controllers/project.controller');
const { authenticate } = require("../config/jwt.config");
module.exports = function(app){
    app.post('/api/projects/new', ProjectController.createProject);
    app.post('/api/projects/:id/favorite', ProjectController.getFavoriteProject);
    app.get('/api/projects', ProjectController.getAllProjects);
    app.get('/api/projects/:id', ProjectController.getProject);
    app.put('/api/projects/:id/edit', authenticate, ProjectController.updateProject);
    app.delete('/api/projects/:id/delete', authenticate, ProjectController.deleteProject);
}