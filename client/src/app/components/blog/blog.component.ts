import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  newPost: boolean = false;
  loadingBlogs: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  newBlogForm() {
    this.newPost = true;
  }

  reloadBlogs() {
    this.loadingBlogs = true;
    this.loadingBlogs = true; // Used to lock button
    this.getAllBlogs(); // Add any new blogs to the page
    setTimeout(() => {
      this.loadingBlogs = false; // Release button lock after four seconds
    }, 4000);
  }

  getAllBlogs() {
    // Function to GET all blogs from database
    // this.blogService.getAllBlogs().subscribe(data => {
      // this.blogPosts = data.blogs; // Assign array to use in HTML
    // })
  }

  draftComment() {

  }

}
