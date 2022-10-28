const Course = require('../model/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class MeController {

    //[get]/sourse/:slug
    storedCourses(req, res, next) {
        Course.find({})
            .then(course => res.render("me/storedcourses", {
                courses: mutipleMongooseToObject(course)
            }))
            .catch(next)

    }


}



module.exports = new MeController;