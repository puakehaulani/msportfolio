const router = require("express").Router();
const linkedInController = require('../controllers/linkedInController')

router.route('/linkedIn/get')
    .get(linkedInController.scrape)

module.exports = router;