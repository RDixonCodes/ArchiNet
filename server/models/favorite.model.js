const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = mongoose.Schema({

    projectFrom: {
        type: Schema.Types.ProjectId,
        ref: "Project",
    },

    name: {
        type: String,
    },

    imageUrl: {
        type: String,
    },

    architect: {
        type: String,
    },

    location: {
        type: String,
    },

    built: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Favorite', FavoriteSchema);