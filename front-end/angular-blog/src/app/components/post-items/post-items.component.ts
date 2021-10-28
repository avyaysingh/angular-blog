import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { Author } from 'src/app/author';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
  styleUrls: ['./post-items.component.css'],
})
export class PostItemsComponent implements OnInit {
  @Input()
  post?: Post;

  @Input()
  author?: Author;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  public updatePost(): void {}

  public deletePost(): void {}
}
