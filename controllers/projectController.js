const db = require("../models");

module.exports = {
    getProjects: function (req, res) {
        db.Project
            .find({})
            .then(project => res.json(project))
            .catch(err => res.status(422).json(err))
    },
    createProject: function (req, res) {
        db.Project
            .create({
                title: req.body.title,
                img: req.body.img,
                summary: req.body.summary,
                repoURL: req.body.repoURL,
                deployURL: req.body.deployURL || null
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}