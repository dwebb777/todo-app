const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const blogRoutes = require("./routes/blogRoutes")

// connect to mongodb
const URI = "mongodb+srv://test:test@cluster0.bgttryu.mongodb.net/node-tuts?retryWrites=true&w=majority"

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log("Mongodb not connected!", err))

// middleware and static files
app.use(express.static("public"))
// needed to grab the data from the post request body property
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.redirect("/blogs")
})

app.get("/about", (req, res) => {
  res.render("about", { title: "About" })
})
// blogRoutes
app.use("/blogs", blogRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" })
})
