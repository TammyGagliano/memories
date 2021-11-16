import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    // if everything is successful
    // we want to retrieve all the posts we have in th database
    try {
        const postMessages = await PostMessage.find();
        // console.log(postMessages);
        res.status(200).json(postMessages);
    // this will happen if we get an error
    } catch (error ){
        res.status(404).json({ message: error.message });
        console.log();
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error ){
        res.status(409).json({ message: error.message });
    }
}