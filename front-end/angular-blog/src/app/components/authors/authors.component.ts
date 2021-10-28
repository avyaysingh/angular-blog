import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorServices: AuthorService) {}

  ngOnInit(): void {
    this.getAuthors();
  }

  public getAuthors(): void {
    //handling errors in responses :
    this.authorServices.getAllAuthors().subscribe(
      (response: Author[]) => {
        this.authors = response;
      },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }

  //simple function to get all authors:
  // public getAuthors(): void {
  //   this.authorServices
  //     .getAllAuthors()
  //     .subscribe((authors) => (this.authors = authors));
  // }
}
