const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");

const helmet = require("helmet");

const bodyParser = require("body-parser");

const device = require("express-device");

const routes = [
  {
    path: "/",
    component: require(__dirname + "/routes/index"),
  },
];

module.exports = () => {
  app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
  app.use(express.static(base_dir + "/public/"));
  app.use(helmet())
  app.use(device.capture());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(cookieParser());

  app.set("view engine", "ejs");

  routes.forEach((route) => {
    app.use(route.path, route.component);
  });

  app.listen(server_info.config.node_port, () => {
    console.log("app is listening on port " + server_info.config.node_port);
  });
};
