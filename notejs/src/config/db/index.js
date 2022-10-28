const mongoose = require('mongoose');

async function connect() {
    try {

        await mongoose.connect('mongodb://localhost:27017/ta_demo_dev');
        console.log("connect successfuly")
    } catch (error) {
        console.log("connect fail")
    }

}
module.exports = { connect };