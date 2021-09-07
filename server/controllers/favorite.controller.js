const Favorite = require('../models/favorite.model');

module.exports.getAllFavorites = (req, res) => {
    Favorite.find({})
    // .sort({name:"ascending"}) //Will sort in alphabetical order. not upper/lower case sensitive
    .then(favorites => res.json(favorites))
    .catch(err => res.json(err));
};

module.exports.getProject = (req, res) => {
	Favorite.findOne({ _id: req.params.id })
		.then(favorite => res.json(favorite))
		.catch(err => res.json(err));
};

module.exports.getFavoriteProjects = (req, res) => {
	Favorite.findOne({ _id: req.params.id }, {new:true})
		.then(favoriteProjects => res.json(favoriteProjects))
		.catch(err => res.json(err));
};


module.exports.deleteFavorite = (req, res) => {
    Favorite.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err));
};