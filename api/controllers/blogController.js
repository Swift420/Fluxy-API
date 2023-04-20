import mongoose from 'mongoose'
import Blog from '../models/Blog'
import User from '../models/User'


export const getAllBlogs = async (req,res,next) => {

    let blogs
    try {
        blogs = await Blog.find()
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }

    return res.status(200).json({blogs})
}

export const addBlog = async (req,res,next) => {

    const  {title, description, image, user} = req.body
    let existingUser;

    try {
        existingUser = await User.findById(user)

    } catch (error) {
        return res.status(400).json({error:error})
    }

    if(!existingUser){
        return res.status(200).json({message: "user not found"})
    }
    const blog = new Blog({
        title,
        description,
        image,
        user
    })

    try {
        const session = await mongoose.startSession();
        session.startTransaction()
        console.log(session)

        await blog.save({session})

        existingUser.blogs.push(blog)
        await existingUser.save({session})

        await session.commitTransaction()
    } catch (error) {
        res.status(400).json({error: error})
    }
    res.status(200).json({blog})
}       


export const getSingleBlog = async(req,res,next) => {
    const {title} = req.body

    try {
        const blog = await Blog.findOne({title})

        if(!blog) {
             return res.status(404).json({
            message: "no blog found"
        })
        }

        return res.status(200).json({blog})
    } catch (error) {
        return res.status(400).json({error: error})
    }
}


export const updateBlog = async(req,res,next) => {
    const {title, description} = req.body

    const { id } = req.params

    console.log(title,description)
    console.log(id)
    let blog
    try {
             blog = await Blog.findByIdAndUpdate(id, {
        title,
        description
    })
    
    } catch (error) {
        return res.status(400).json({error})
    }

    if(!blog){
        return res.status(400).json({message: "Blog not found"})
    }

    return res.status(200).json({blog})

}


export const deleteBlog = async (req, res,next) => {
    const {id}  = req.params
    let blog
    try {
       blog = await Blog.findByIdAndDelete(id)
        
    } catch (error) {
        res.staus(400).json({error: error})
        
    }

    if(!blog){
        res.status(400).json({message: "Blog was not deleted"})
    }

    res.status(200).json({message: "Blog was successfully deleted"})
}