const mongoose = require("mongoose")
const commentsSchema = require("../blogposts/comments")

const BlogPostSchema = new mongoose.Schema({

    blogTitle:{
        type: String,
        required: true,
        trim: true,
    },

    blogSubheading:{
        type: String,
        required: true,
        trim: true,
    },

    blogAuthor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserSchema',
        required: true
    },

    blogContent:{
        type: String,
        required: true,
        trim: true,
    },

    blogStatus: {
        type: String,
        enum: ['draft','published'],
        default: 'draft',
    },

    blogCategory: {
        type: String,
        required: false
    },

    blogViews:{
        type: Number,
        default: 0,
    },

    blogLikes:{
        type:Number,
        default: 0,
    },

    BlogImage1: {
        type: String,
        required: false
      },
    
    BlogImage2:{
        type: String,
        required: false
    },

    BlogImage3:{
        type: String,
        required: false
    },

    // blogComments: [commentsSchema],

    tags: {
        type: [String], // Array of strings for tags
        required: false
      },


    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now

    },
    
})

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPostModel;