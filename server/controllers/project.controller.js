const Project = require('../models/project.model');

module.exports.createProject = (req, res) => {
    const { name, imageUrl, architect, location, built } = req.body;
    Project.create({name, imageUrl, architect, location, built})
    .then(project => res.json(project))
    .catch(err => res.status(400).json(err));
};

module.exports.getAllProjects = (req, res) => {
    Project.find({})
    // .sort({name:"ascending"}) //Will sort in alphabetical order. not upper/lower case sensitive
    .then(projects => res.json(projects))
    .catch(err => res.json(err));
};

module.exports.getFavoriteProject = (req, res) => {
    Project.findOne({ _id: req.params.id })
		.then(project => res.json(project))
		.catch(err => res.json(err));
}

module.exports.getProject = (req, res) => {
	Project.findOne({ _id: req.params.id })
		.then(project => res.json(project))
		.catch(err => res.json(err));
};

module.exports.updateProject = (req, res) => {
    Project.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
    .then(updatedProject => res.json(updatedProject))
    .catch(err => res.status(400).json(err));
};

module.exports.deleteProject = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err));
};