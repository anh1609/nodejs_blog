const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars');
const { use } = require('express/lib/application');
const morgan = require('morgan');
const methodOverride = require('method-override')
const app = express()
const port = 3000;
const route = require("./routes/index.js");
const db = require("./config/db");

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'))

//connect db
db.connect();


// template engine
app.engine('hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }

    }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources\\views'));

route(app);


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})