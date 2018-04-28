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
     GET ALL BLOG POSTS
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


  /* ===============================================================
     GET SINGLE BLOG POST
  =============================================================== */
  router.get('/singleBlog/:id', (req, res) => {

    if (!req.params.id) {
      res.json({ success: false, message: 'No blog ID was provided' })
    } else {
            Blog.findOne( { _id: req.params.id }, (err, blogId) => {
              if (err) {
                res.json({ success: false, message: 'Not a valid blog ID'});
              } else {
                if (!blogId) {
                  res.json({ success: false, message: 'Blog ID not found'});
                } else {
                    User.findOne({_id: req.decoded.userId }, (err, user) => {
                      if (err) {
                        res.json({ success: false, message: err });
                      } else {
                            if (!user) {
                              res.json({ success: false, message: 'Unable to authenticate user'});
                            } else {
                                if(user.username !== blogId.createdBy) {
                                  res.json({ success: false, message: 'You are not authorized to edit this blog post.'});
                                } else {
                                    res.json({ success: true, post: blogId });
                                  }
                              }
                        }
                    });
                  }
              }
            });
    }
  });

  /* ===============================================================
     UPDATE SINGLE BLOG POST
  =============================================================== */
  router.put('/updateBlog', (req, res) => {
    if (!req.body._id) {
      res.json({ success: false, message: 'No blog ID provided'});
    } else {
      Blog.findOne({ _id: req.body._id }, (err, post) => {
        if (err) {
          res.json({ success: false, message: 'Not a valid blog ID' } );
        } else {
            if (!post) {
              res.json({ success: false, message: 'Blog ID was not found' } );
            } else {
                // We now want to verify that the user is the author of the post
                User.findOne({ _id: req.decoded.userId }, (err, user) => {
                  if (err) {
                    res.json({ success: false, message: err } );
                  } else {
                      if (!user) {
                        res.json({ success: false, message: 'Unable to authenticate user'});
                      } else {
                          if (user.username !== post.createdBy) {
                            res.json({ success: false, message: 'You are not authorized to edit this blog post'});
                          } else {
                              post.title = req.body.title;
                              post.body = req.body.body;
                              post.save((err) => {
                                if (err) {
                                  res.json({ success: false, message: err});
                                } else {
                                  res.json({ success: true, message: 'Blog post updated!'});
                                }
                              });
                            }
                      }
                    }
                });
            }
          }
      });
    }
  });

  /* ===============================================================
     DELETE BLOG POST
  =============================================================== */
  router.delete('/deleteBlog/:id', (req, res) => {
    // Check if ID was provided in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No id provided' }); // Return error message
    } else {
      // Check if id is found in database
      Blog.findOne({ _id: req.params.id }, (err, blog) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Invalid id' }); // Return error message
        } else {
          // Check if blog was found in database
          if (!blog) {
            res.json({ success: false, messasge: 'Blog was not found' }); // Return error message
          } else {
            // Get info on user who is attempting to delete post
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                // Check if user's id was found in database
                if (!user) {
                  res.json({ success: false, message: 'Unable to authenticate user.' }); // Return error message
                } else {
                  // Check if user attempting to delete blog is the same user who originally posted the blog
                  if (user.username !== blog.createdBy) {
                    res.json({ success: false, message: 'You are not authorized to delete this blog post' }); // Return error message
                  } else {
                    // Remove the blog from database
                    blog.remove((err) => {
                      if (err) {
                        res.json({ success: false, message: err }); // Return error message
                      } else {
                        res.json({ success: true, message: 'Blog post deleted!' }); // Return success message
                      }
                    });
                  }
                }
              }
            });
          }
        }
      });
    }
  });

  /* ===============================================================
     LIKE BLOG POST
  =============================================================== */
  router.put('/likeBlog', (req, res) => {
    // Check if id was passed provided in request body
    if (!req.body.id) {
      res.json({ success: false, message: 'No ID was provided.' }); // Return error message
    } else {
      // Search the database with id
      Blog.findOne({ _id: req.body.id }, (err, blog) => {
        // Check if error was encountered
        if (err) {
          res.json({ success: false, message: 'Invalid blog ID' }); // Return error message
        } else {
          // Check if id matched the id of a blog post in the database
          if (!blog) {
            res.json({ success: false, message: 'That blog post was not found' }); // Return error message
          } else {
            // Get data from user that is signed in
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: 'Something went wrong...' }); // Return error message
              } else {
                // Check if id of user in session was found in the database
                if (!user) {
                  res.json({ success: false, message: 'Could not authenticate user' }); // Return error message
                } else {
                  // Check if user who liked post is the same user that originally created the blog post
                  if (user.username === blog.createdBy) {
                    res.json({ success: false, messagse: 'Cannot like your own post' }); // Return error message
                  } else {
                    // Check if the user who liked the post has already liked the blog post before
                    if (blog.likedBy.includes(user.username)) {
                      res.json({ success: false, message: "You've already liked this post" }); // Return error message
                    } else {
                      // Check if user who liked post has previously disliked a post
                      if (blog.dislikedBy.includes(user.username)) {
                        blog.dislikes--; // Reduce the total number of dislikes
                        const arrayIndex = blog.dislikedBy.indexOf(user.username); // Get the index of the username in the array for removal
                        blog.dislikedBy.splice(arrayIndex, 1); // Remove user from array
                        blog.likes++; // Increment likes
                        blog.likedBy.push(user.username); // Add username to the array of likedBy array
                        // Save blog post data
                        blog.save((err) => {
                          // Check if error was found
                          if (err) {
                            res.json({ success: false, message: 'Something went wrong...' }); // Return error message
                          } else {
                            res.json({ success: true, message: 'Blog liked!' }); // Return success message
                          }
                        });
                      } else {
                        blog.likes++; // Incriment likes
                        blog.likedBy.push(user.username); // Add liker's username into array of likedBy
                        // Save blog post
                        blog.save((err) => {
                          if (err) {
                            res.json({ success: false, message: 'Something went wrong...' }); // Return error message
                          } else {
                            res.json({ success: true, message: 'Blog post liked!' }); // Return success message
                          }
                        });
                      }
                    }
                  }
                }
              }
            });
          }
        }
      });
    }
  });

  /* ===============================================================
     DISLIKE BLOG POST
  =============================================================== */
  router.put('/dislikeBlog', (req, res) => {
    // Check if id was provided inside the request body
    if (!req.body.id) {
      res.json({ success: false, message: 'No ID was provided' }); // Return error message
    } else {
      // Search database for blog post using the id
      Blog.findOne({ _id: req.body.id }, (err, blog) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Invalid blog post ID' }); // Return error message
        } else {
          // Check if blog post with the id was found in the database
          if (!blog) {
            res.json({ success: false, message: 'That blog post was not found' }); // Return error message
          } else {
            // Get data of user who is logged in
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: 'Something went wrong...' }); // Return error message
              } else {
                // Check if user was found in the database
                if (!user) {
                  res.json({ success: false, message: 'Could not authenticate user' }); // Return error message
                } else {
                  // Check if user who disliekd post is the same person who originated the blog post
                  if (user.username === blog.createdBy) {
                    res.json({ success: false, messagse: 'You cannot dislike your own post' }); // Return error message
                  } else {
                    // Check if user who disliked post has already disliked it before
                    if (blog.dislikedBy.includes(user.username)) {
                      res.json({ success: false, message: "You've already disliked this post." }); // Return error message
                    } else {
                      // Check if user has previous disliked this post
                      if (blog.likedBy.includes(user.username)) {
                        blog.likes--; // Decrease likes by one
                        const arrayIndex = blog.likedBy.indexOf(user.username); // Check where username is inside of the array
                        blog.likedBy.splice(arrayIndex, 1); // Remove username from index
                        blog.dislikes++; // Increase dislikes by one
                        blog.dislikedBy.push(user.username); // Add username to list of dislikers
                        // Save blog data
                        blog.save((err) => {
                          // Check if error was found
                          if (err) {
                            res.json({ success: false, message: 'Something went wrong...' }); // Return error message
                          } else {
                            res.json({ success: true, message: 'Blog post disliked!' }); // Return success message
                          }
                        });
                      } else {
                        blog.dislikes++; // Increase likes by one
                        blog.dislikedBy.push(user.username); // Add username to list of likers
                        // Save blog data
                        blog.save((err) => {
                          // Check if error was found
                          if (err) {
                            res.json({ success: false, message: 'Something went wrong...' }); // Return error message
                          } else {
                            res.json({ success: true, message: 'Blog post disliked!' }); // Return success message
                          }
                        });
                      }
                    }
                  }
                }
              }
            });
          }
        }
      });
    }
  });

  return router; // Return router object to main index.js
}