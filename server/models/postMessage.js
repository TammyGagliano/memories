import mongoose from 'mongoose';

// each post will have to have the following
const postSchema = mongoose.Schema({
    title: String, 
    message: String, 
    creator: String,
    tags: [String], // this is an array of strings
    selectedFile: String, 
    likeCount: {
        type: Number, 
        default: 0
    }, 
    createdAt: {
        type: Date, 
        default: new Date()
    },
});

// now we turn it into a model 
const PostMessage = mongoose.model('PostMessage', postSchema);

// we are exporting a mongoose model from the Post Message file.
// We will be able to run commands such as find, create, delete 
export default PostMessage;
