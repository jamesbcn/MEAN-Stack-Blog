import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class BlogService {

  options: object; // used to store headers
  domain = this.authService.domain; // localhost

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

   // Function to be used any time we need headers
   // (whenever user needs to be authorized before they access something)
   createAuthenticationHeaders() {
    this.authService.loadToken(); // Get token so it can be attached to headers

    this.options = new RequestOptions({
            headers: new Headers({
              'Content-Type': 'application/json',
              'authorization': this.authService.authToken
            })
        });
    }

  newBlog(blog) {
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + 'blogs/newBlog', blog, this.options).map(res => res.json());
    // So when making a post request the newBlog api is expecting the
    // blog object (from blog component)
    // along with the options for the header.
  }

  getAllBlogs() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'blogs/allBlogs', this.options).map(res => res.json());
  }

  getSingleBlog(id) {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'blogs/singleBlog/' + id, this.options).map(res => res.json());
  }

  editBlog(post) {
    this.createAuthenticationHeaders();
    return this.http.put(this.domain + 'blogs/updateBlog/', post, this.options).map(res => res.json());
  }

  deleteBlog(id) {
    this.createAuthenticationHeaders();
    return this.http.delete(this.domain + 'blogs/deleteBlog/' + id, this.options).map(res => res.json());
  }

  likeBlog(id) {
    const blogData = { id: id };
    return this.http.put(this.domain + 'blogs/likeBlog/', blogData, this.options).map(res => res.json());
  }

  dislikeBlog(id) {
    const blogData = { id: id };
    return this.http.put(this.domain + 'blogs/dislikeBlog/', blogData, this.options).map(res => res.json());
  }


  postComment(id, comment) {
    this.createAuthenticationHeaders(); // Create headers
    // Create blog post data to pass to backend
    const blogData = {
      id: id,
      comment: comment
    };

    return this.http.post(this.domain + 'blogs/comment', blogData, this.options).map(res => res.json());
  }

}
