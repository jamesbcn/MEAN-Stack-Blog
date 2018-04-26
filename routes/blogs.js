const User = require('../models/user'); // Import User Model Schema
const Blog = require('../models/blog'); // Import Blog Model Schema
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {

  router.post('/newBlog', (req, res) => {
    if (!req.body.title) {
      res.json({ success: false, message: 'Blog title is required' });
    } else {
        if (!req.body.body) {
          res.json({ success: false, message: 'Blog body is required' });
        } else {
            if(!req.body.createdBy) {
              res.json({ success: false, message: 'Blog creator is required' });
              } else {
                const blog = new Blog({
                  title: req.body.title,
                  body: req.body.body,
                  createdBy: req.body.createdBy
                });
                blog.save((err) => {
                  if(err){
                    if(err.errors) {
                      if(err.errors.title) {
                        res.json({success: false, message: err.errors.title.message });
                      } else {
                        if (err.errors.body) {
                          res.json({success: false, message: err.errors.body.message });
                        } else {
                          res.json({success: false, message: err.errmsg}); // some other validation error.
                        }
                      }
                    } else {
                      res.json({success: false, message: err}); // non-validation error
                    }

                    } else {
                      res.json({success: true, message: 'Blog post saved!'});
                    }
                });
            }
        }
      }
  });

   /* ===============================================================
     GET ALL BLOGS
  =============================================================== */
  router.get('/allBlogs', (req, res) => {
    // Search database for all blog posts using Blog model
    Blog.find({}, (err, blogs) => {
      // Check if error was found or not
      if (err) {
        res.json({ success: false, message: err }); // Return error message
      } else {
        // Check if blogs were found in database
        if (!blogs) {
          res.json({ success: false, message: 'No blogs found.' }); // Return error of no blogs found
        } else {
          res.json({ success: true, blogs: blogs }); // Return success and blogs array
        }
      }
    }).sort({ '_id': -1 }); // Sort blogs from newest to oldest using the id field 
      // (-1 means descending order)
  });


  router.get('/singleBlog/:id', (req, res) => {

    if (!req.params.id) {
      res.json({ success: false, message: 'No blog ID was provided.' })
    } else {
            Blog.findOne( { _id: req.params.id }, (err, blogId) => {
              if (err) {
                res.json({ success: false, message: 'Not a valid blog ID.'});
              } else {
                if (!blogId) {
                  res.json({ success: false, message: 'Blog ID not found.'});
                } else {
                  res.json({ success: true, post: blogId });
                }
              }
            })
    }
  });

  return router; // Return router object to main index.js
}