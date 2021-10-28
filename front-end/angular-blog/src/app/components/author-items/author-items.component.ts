import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../author';


@Component({
  selector: 'app-author-items',
  templateUrl: './author-items.component.html',
  styleUrls: ['./author-items.component.css']
})
export class AuthorItemsComponent implements OnInit {

  @Input()
  author?: Author;

  constructor() { }

  ngOnInit(): void {
  }

}
