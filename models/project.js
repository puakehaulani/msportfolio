
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    summary: { type: String, required: true },
    repoURL: { type: String, required: true },
    deployURL: { type: String }

});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;