import axios from 'axios';
//axios is used for making api calls

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePosts = (id, updatedpost) => axios.patch(`${url}/${id}`, updatedpost);

export const deletePost=(id)=>axios.delete(`${url}/${id}`);

export const likePost=(id)=>axios.patch(`${url}/${id}/likePost`);