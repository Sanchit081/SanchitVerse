const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// POST contact form
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message, phone } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Please provide a valid email address' });
        }

        // Save contact message to database
        const contact = new Contact({
            name,
            email,
            subject,
            message,
            phone,
            ipAddress: req.ip,
            userAgent: req.get('User-Agent')
        });

        await contact.save();

        // Send email notification
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <hr>
                <p><small>Sent from: ${req.ip}</small></p>
            `
        };

        // Send confirmation email to user
        const userMailOptions = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Thank you for contacting SanchitVerse',
            html: `
                <h2>Thank you for reaching out!</h2>
                <p>Dear ${name},</p>
                <p>Thank you for contacting SanchitVerse. We have received your message and will get back to you as soon as possible.</p>
                <p><strong>Your message:</strong></p>
                <p>${message}</p>
                <p>Best regards,<br>The SanchitVerse Team</p>
            `
        };

        // Send emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(userMailOptions);

        res.status(201).json({ 
            message: 'Your message has been sent successfully! We will get back to you soon.',
            contactId: contact._id
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    }
});

// GET all contact messages (admin only)
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 20, status } = req.query;
        const query = {};
        
        if (status) query.status = status;

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Contact.countDocuments(query);

        res.json({
            contacts,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            total
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single contact message
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact message not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT update contact status (admin only)
router.put('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        
        if (!contact) {
            return res.status(404).json({ message: 'Contact message not found' });
        }
        
        res.json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE contact message (admin only)
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact message not found' });
        }
        res.json({ message: 'Contact message deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
