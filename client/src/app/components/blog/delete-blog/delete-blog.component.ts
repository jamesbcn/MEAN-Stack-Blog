import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.scss']
})
export class DeleteBlogComponent implements OnInit {
  message;
  messageClass;
  foundBlogPost = false;
  processing = false;
  post;
  currentUrl;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  // Function to delete blogs
  deleteBlog() {
    this.processing = true; // Disable buttons
    // Function for DELETE request
    this.blogService.deleteBlog(this.currentUrl.id).subscribe(data => {
      // Check if delete request worked
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error bootstrap class
        this.message = data.message; // Return error message
      } else {
        this.messageClass = 'alert alert-success'; // Return bootstrap success class
        this.message = data.message; // Return success message
        // After two second timeout, route to blog page
        setTimeout(() => {
          this.router.navigate(['/blog']); // Route users to blog page
        }, 2000);
      }
    });
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
    // Function for GET request to retrieve blog
    this.blogService.getSingleBlog(this.currentUrl.id).subscribe(data => {
      // Check if request was successfull
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return bootstrap error class
        this.message = data.message; // Return error message
      } else {
        // Create the blog object to use in HTML
        this.post = {
          title: data.post.title, // Set title
          body: data.post.body, // Set body
          createdBy: data.post.createdBy, // Set created_by field
          createdAt: data.post.createdAt // Set created_at field
        };
        this.foundBlogPost = true; // Displaly blog window
      }
    });
  }

}
