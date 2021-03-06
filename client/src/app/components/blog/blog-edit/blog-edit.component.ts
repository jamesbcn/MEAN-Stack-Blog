import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; // Activated Route used to allow ng to grab URL
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  message: string;
  messageClass: string;
  post;
  processing: boolean = false;
  currentUrl;
  loading: boolean = true;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.blogService.getSingleBlog(this.currentUrl.id).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/blog']);
        }, 2000);
      } else {
          this.post = data.post;
          this.loading = false;
      }
    });
  }

  updateBlogSubmit() {
    this.processing = true;
    this.blogService.editBlog(this.post).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message.message.slice(30);
        this.processing = false;
      } else {
          this.messageClass = 'alert alert-success';
          this.message = data.message;
          setTimeout(() => {
            this.router.navigate(['/blog']);
          }, 2000);
        }
    });
  }

  goBack() {
    this.location.back();
  }

}
