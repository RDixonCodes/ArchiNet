const mongoose = require('mongoose');
const db_name = "project";

module.exports = (db_name) => {
    mongoose.connect("mongodb://localhost/projects", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
})
    .then(() => console.log("Ready to view projects!"))
    .catch(err => console.log("Mmm. Nope. Try agian.", err));
}