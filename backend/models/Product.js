const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    originalPrice: {
        type: Number,
        min: 0
    },
    image: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    category: {
        type: String,
        required: true,
        enum: ['Digital Product', 'Service', 'Course', 'Template', 'E-book']
    },
    tags: [{
        type: String,
        trim: true
    }],
    features: [{
        type: String
    }],
    downloadUrl: {
        type: String
    },
    demoUrl: {
        type: String
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    reviews: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    published: {
        type: Boolean,
        default: true
    },
    specifications: {
        type: Map,
        of: String
    }
}, {
    timestamps: true
});

// Virtual for discount percentage
productSchema.virtual('discountPercentage').get(function() {
    if (this.originalPrice && this.price < this.originalPrice) {
        return Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
    }
    return 0;
});

module.exports = mongoose.model('Product', productSchema);
