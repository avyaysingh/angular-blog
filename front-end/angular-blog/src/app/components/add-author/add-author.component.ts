import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Author } from 'src/app/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
})
export class AddAuthorComponent implements OnInit {
  //angular reactive forms without using FormBuilder....

  // addAuthorForm = new FormGroup({
  //   authorName: new FormControl(''),
  //   authorEmail: new FormControl(''),
  // });

  addAuthorForm: FormGroup;

  constructor(
    private authorService: AuthorService,
    private formBuilder: FormBuilder
  ) {
    this.addAuthorForm = this.formBuilder.group({
      author_name: [''],
      author_email: [''],
    });
  }

  ngOnInit(): void {}

  //POST: add an author to the database
  public onAddAuthor(): void {
    this.authorService.addAuthor(this.addAuthorForm.value).subscribe(
      (response: Author) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
