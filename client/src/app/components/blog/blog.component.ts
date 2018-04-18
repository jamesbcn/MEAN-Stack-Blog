import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  messageClass: string;
  message: string;
  newPost: boolean = false;
  username: string;
  loadingBlogs: boolean = false;
  form; // TODO
  processing: boolean = false;
  blogPosts; // TODO // Array of blogs from blogService.getAllBlogs() to be iterated through

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private blogService: BlogService
  ) {
    this.createNewBlogForm();
  }

  ngOnInit() {
    // Get profile username on page load
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new blog posts and comments

    this.getAllBlogs();

    });
  }

  createNewBlogForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5),
        this.alphaNumericValidation
      ])],
      body: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(5)
      ])]
    });
  }

    // Enable new blog form
    enableFormNewBlogForm() {
      this.form.get('title').enable();
      this.form.get('body').enable();
    }
    // Disable new blog form
    disableFormNewBlogForm() {
      this.form.get('title').disable();
      this.form.get('body').disable();
    }

    onBlogSubmit() {
      this.processing = true; // Disable submit button
      this.disableFormNewBlogForm(); // Lock form
      // Create blog object from the inputs
      const blog = {
        title: this.form.get('title').value, // taken from the form inputs
        body: this.form.get('body').value,  // taken from the form inputs
        createdBy: this.username  // taken from the auth service (see ngOnInit)
      };

      this.blogService.newBlog(blog).subscribe(data => {
        if (!data.success) {
          this.messageClass = 'alert alert-danger';
          this.message = data.message;
          this.processing = false;
          this.enableFormNewBlogForm();
        } else {
            this.messageClass = 'alert alert-success';
            this.message = data.message;
            this.getAllBlogs(); // So any time a new blog post is posted it's going to display all
            // Clear all data after 2 seconds...
            setTimeout(() => {
              this.newPost = false;
              this.processing = false;
              this.message = '';
              this.form.reset();
              this.enableFormNewBlogForm();
            }, 2000);
          }
      });
    }

  // Validation for title <<<< TODO
  alphaNumericValidation(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
    // Check if test returns false or true
    if (regExp.test(controls.value)) {
      return null; // Return valid
    } else {
      return { 'alphaNumericValidation': true };
    }
  }

  newBlogForm() {
    this.newPost = true;
  }

  reloadBlogs() {
    this.loadingBlogs = true; // Locks button ti stop user hammering server
    this.getAllBlogs(); // Add any new blogs to the page

    setTimeout(() => {
      this.loadingBlogs = false; // Release button lock after four seconds
    }, 4000);
  }

  getAllBlogs() {
    // Function to GET all blogs from database
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogPosts = data.blogs; // Assign array to use in HTML
    });
  }

  draftComment() {

  }

  goBack() {
    window.location.reload();
  }
}
