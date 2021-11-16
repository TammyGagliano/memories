import express from 'express';
import { getPosts, createPost  } from '../controllers/posts.js'
import PostMessage from '../models/postMessage.js';
// set up router
const router = express.Router();

// Start adding routes // localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);

export default router; 