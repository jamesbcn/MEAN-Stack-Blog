import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  newPost: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  newBlogForm() {
    this.newPost = true;
  }

}
