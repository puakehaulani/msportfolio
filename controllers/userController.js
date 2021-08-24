const db = require("../models");

// Defining methods for the userController
module.exports = {

    findUser: function (req, res) {
        db.User
            .findOne({ email: req.params.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};