const mongoose = require("mongoose");
const FavoriteSchema = mongoose.Schema({

    favorite: {
        type: mongoose.Schema.Types.ProjectId,
        ref: "User",
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

module.exports = mongoose.model('Favorites', FavoriteSchema);