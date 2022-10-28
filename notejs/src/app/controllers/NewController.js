class NewController {
    // {get}/new
    index(req, res) {
        res.render('new');
    }
    show(req, res) {
        res.send('sdsđ')
    }
}
module.exports = new NewController;