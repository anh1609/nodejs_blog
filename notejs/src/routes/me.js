var express = require('express');
var router = express.Router();
const meController = require('../app/controllers/MeController')

router.get('/stored/coursed', meController.storedCourses)




module.exports = router;