import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'applicaton/json' }),
  };
  private postsUrl = 'http://localhost:5000/posts';

  constructor(private httpClient: HttpClient) {}

  // GET: get all posts
  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.postsUrl);
  }

  // POST: add a post
  addPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(`${this.postsUrl}/create`, post);
  }
}
