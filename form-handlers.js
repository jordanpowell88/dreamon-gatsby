const bodyParser = require("body-parser")
const express = require("express")
const nodemailer = require("nodemailer")

const app = express()
app.use(bodyParser.urlencoded())

const rootUrl = "http://localhost:8000";

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "no-reply@dreamon.world",
    pass: "b&8jbMjH_22",
  },
})

app.post("/contact", function(req, res) {
  mailer.sendMail(
    {
      from: req.body.from,
      to: ["jordan@dreamon.world"],
      subject: "Dream On: Contact Request",
      html:
      `Name: ${req.body.name}<br />
       Email: ${req.body.email}<br />
       Phone: ${req.body.phone}<br />
       Message: ${req.body.message}<br />
      `
    },
    function(err, info) {
      if (err) return res.status(500).send(err)
      console.log(info)
      res.redirect(rootUrl)
    }
  )
})

app.listen(3000)