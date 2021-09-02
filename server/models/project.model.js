const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({

    name: {
        type: String, 
        // unique:[true, "Name already exist"],
        required: [true,"Project name is required"],
        minlength: [3, "Project name must be at least 3 characters"]
        },

    imageUrl: {
            type: String,
            required: [true, "Project URL is required"],
            minlength: [5, "Project URL must be at least 5 characters"]
        },
    
    architect: {
            type: String,
            required: [true, "Architect name is required"],
            minlength: [5, "Architect's name must be at least 5 characters"]
    },

    location: {
        type: String,
        required: [true, "Project location is required"],
        minlength: [5, "Project location must be at least 5 characters"]
    },

    built: { 
        type: Number,
        required: [true, "Year built is required"]
    }
    }, { timestamps: true });
module.exports = mongoose.model('Projects', ProjectSchema);