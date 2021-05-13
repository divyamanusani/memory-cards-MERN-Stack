const express = require('express');
const router = express.Router();
const postRoute = require('../controllers/posts.js');

router.get('/', postRoute.getPosts);
router.post('/',postRoute.createPost);
router.patch('/:id',postRoute.updatePost);
router.delete('/:id',postRoute.deletePost);
router.patch('/:id/likePost',postRoute.likePost);

module.exports = router;