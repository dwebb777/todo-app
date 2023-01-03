const express = require("express")
const router = express.Router()
const { blog_index, blog_details, blog_create_get, blog_delete, blog_create_post } = require("../controllers/blogController")

// getting the create page for creating blogs
router.get("/create", blog_create_get)
// displaying the blogs in descending order
router.get("/", blog_index)
// creating a new blog
router.post("/", blog_create_post)
//get a single blog
router.get("/:id", blog_details)
//deleting a single blog
router.delete("/:id", blog_delete)

module.exports = router
