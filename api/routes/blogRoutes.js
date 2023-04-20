import express from 'express'
import { addBlog, getAllBlogs, getSingleBlog, updateBlog } from '../controllers/blogController'
const blogRouter = express.Router()



blogRouter.get("/", getAllBlogs)
blogRouter.get("/singleBlog", getSingleBlog)
blogRouter.post("/add", addBlog)
blogRouter.put("/update/:id", updateBlog)

export default blogRouter