const express = require("express");
const router = express.Router();
const moment = require("moment");
const axios = require("axios");
const nodemailer = require("nodemailer");

router.get("/", async (req, res) => {
  try {
    let { data } = await axios.get(
      `${server_info.config.api_base_url}/api/v1/resources`
    );

    let blogs = [];

    if (data.status == "ok") {
      if (Array.isArray(data.data)) {
        blogs = data.data;
      }
    }

    if (blogs.length > 4) {
      blogs.slice(0, 4);
    }

    console.log(req.device);

    if (req.device.type.toLowerCase() == "desktop") {
      res.render("index", {
        server_info,
        moment,
        blogs,
        query: req.query,
      });
    } else {
      res.render("mobile_index", {
        server_info,
        moment,
        blogs,
        query: req.query,
      });
    }
  } catch (e) {
    if (req.device.type.toLowerCase() == "desktop") {
      res.render("index", { server_info, moment, blogs: [], query: req.query });
    } else {
      res.render("mobile_index", {
        server_info,
        moment,
        blogs: [],
        query: req.query,
      });
    }
  }
});

router.post("/", async (req, res) => {
  try {
    if (req.body.name && req.body.email && req.body.message) {
      let transponder = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: server_info.keys.email,
          pass: server_info.keys.password,
        },
      });
      let mailOptions = {
        from: server_info.keys.email,
        to: "aidaneglin@gmail.com",
        subject: `${req.body.name} - ${req.body.email} Contact Request from Portfolio`,
        text: `
				${req.body.message}
				${moment().format("MMMM DD, YYYY HH:MM")}
				`,
      };
      transponder.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Email Sent: ${info.response}`);
        }
      });
      res.redirect("/");
    } else {
      res.redirect(
        `/?error=${encodeURIComponent("Error: All fields fequired")}#error`
      );
    }
  } catch (e) {
    console.log(e);
    res.redirect(
      `/?error=${encodeURIComponent("Error: An unknown error occured")}#error`
    );
  }
});

module.exports = router;
