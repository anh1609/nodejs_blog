const Course = require('../model/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // {get}/home
    home(req, res, next) {
        Course.find({})
            .then(courses => {
                //sua loi cua handlebars de hien thi ra 
                // courses = courses.map(courses => courses.toObject())
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })

        .catch(next);

        // res.render('home');
    }

}
module.exports = new SiteController;