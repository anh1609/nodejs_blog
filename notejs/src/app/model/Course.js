const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema({
    name: String,
    description: String,
    image: String,
    slug: { type: String, slug: "name" },
    videoid: { type: String, require: true, },
    creatrdAt: Date,
    updatedAt: Date

});
module.exports = mongoose.model('Course', Course);