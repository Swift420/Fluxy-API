import express from 'express'
import { addBlog, deleteBlog, getAllBlogs, getSingleBlog, updateBlog } from '../controllers/blogController'
const blogRouter = express.Router()



blogRouter.get("/", getAllBlogs)
blogRouter.get("/singleBlog", getSingleBlog)
blogRouter.post("/add", addBlog)
blogRouter.put("/update/:id", updateBlog)
blogRouter.delete("/delete/:id", deleteBlog)

export default blogRouter