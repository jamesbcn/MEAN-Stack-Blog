import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  message: string;
  messageClass: string;
  post: object = {
    title: String,
    body: String
    };
  processing: boolean = false;

  constructor( private location: Location ) { }

  ngOnInit() {
  }

  updateBlogSubmit() {
    // submit
  }

  goBack() {
    this.location.back();
  }

}
