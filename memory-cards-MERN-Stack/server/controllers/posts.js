const mongoose = require('mongoose');
const PostMessage = require('../models/postMessage.js');

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    //res.send('This works');
}

const createPost = async (req, res) => {

    //https://www.restapitutorial.com/httpstatuscodes.html
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ msg: error.message });
    }
    //res.send('Post Creation');
}

const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.status(200).json(updatedPost);
}

const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('No post with that id');
    console.log(_id);
    await PostMessage.findByIdAndRemove(_id);
    res.status(200).send('Post deleted successfully');
}

const likePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');

    let postToLike = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: postToLike.likeCount + 1 }, { new: true });
    res.status(200).json(updatedPost);
}


module.exports = { getPosts, createPost, updatePost, deletePost, likePost };