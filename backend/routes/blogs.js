const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// GET all blogs
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 10, category, search } = req.query;
        const query = { published: true };
        
        if (category) query.category = category;
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
                { tags: { $in: [new RegExp(search, 'i')] } }
            ];
        }

        const blogs = await Blog.find(query)
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Blog.countDocuments(query);

        res.json({
            blogs,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            total
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single blog
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        
        // Increment view count
        blog.views += 1;
        await blog.save();
        
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET featured blogs
router.get('/featured/all', async (req, res) => {
    try {
        const blogs = await Blog.find({ featured: true, published: true })
            .sort({ createdAt: -1 })
            .limit(6);
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET categories
router.get('/categories/all', async (req, res) => {
    try {
        const categories = await Blog.distinct('category');
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create blog (admin only)
router.post('/', async (req, res) => {
    try {
        const blog = new Blog(req.body);
        const savedBlog = await blog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update blog (admin only)
router.put('/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        
        res.json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE blog (admin only)
router.delete('/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
