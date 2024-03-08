import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
}, { timestamps: true })

const BlogModel = mongoose.model('all_blog', BlogSchema)
export default BlogModel