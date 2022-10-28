const Course = require('../model/Course')
const { mongooseToObject } = require('../../util/mongoose')
class CourseController {
    // {get}/home
    // home(req, res, next) {
    //     Course.find({})
    //         .then(courses => {
    //             //sua loi cua handlebars de hien thi ra 
    //             courses = courses.map(courses => courses.toObject())
    //             res.render('home', { courses });
    //         })

    //     .catch(next);

    //     // res.render('home');
    // }
    //[get]/sourse/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course =>
                res.render('courses/show', { course: mongooseToObject(course) })
            )
            .catch(next);
    }
    create(req, res, next) {
            res.render('courses/create')
        }
        // post /courses/store
    store(req, res, next) {
            const course = new Course(req.body);
            course.save()
                .then(() => res.redirect('/'))
                .catch(error => {

                });


        }
        //[get]/courses/:id/edit
        //req.params.id :lấy ra id lên url
    edit(req, res, next) {
            Course.findById(req.params.id)
                .then(course => res.render('courses/edit', {
                    course: mongooseToObject(course)
                }))
                .catch(next)
        }
        //[put]/course/:id
    update(req, res, next) {
            Course.updateOne({ _id: req.params.id }, req.body)
                .then(() => res.redirect('/me/stored/coursed'))
                .catch(next);
        }
        //[delete]/courses/:id
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }


}
module.exports = new CourseController;