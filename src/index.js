const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");
// const db = require('./config/db');

// Connect to DB
// db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP Logger
// app.use(morgan('combined'))

// Template Engine
app.engine( "hbs", handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b, //fuction
    }
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views")); //Chỉ định dường dẫn Folder Views

// console.log('Path: ', path.join(__dirname, 'resources/views'))

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
