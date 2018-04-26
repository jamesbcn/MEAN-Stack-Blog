import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Used to allow ng to grab URL
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  message: string;
  messageClass: string;
  post = {
    title: String,
    body: String
    };
  processing: boolean = false;
  currentUrl;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.blogService.getSingleBlog(this.currentUrl.id).subscribe(data => {
      this.post = data.blog;
    });
  }

  updateBlogSubmit() {
    // submit
  }

  goBack() {
    this.location.back();
  }

}
