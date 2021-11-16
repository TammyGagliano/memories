import express from 'express';
import { getPosts } from '../controllers/posts.js'
// set up router
const router = express.Router();

// Start adding routes // localhost:5000/posts
router.get('/', getPosts);

export default router; 