import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { Author } from 'src/app/author';
import { PostService } from 'src/app/services/post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }



  public getPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response: Post[]) => {
        this.posts = response;
      },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
}
