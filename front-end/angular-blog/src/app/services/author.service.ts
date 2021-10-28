import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private authorUrl = 'http://localhost:5000/authors'; //node server on this localhost

  constructor(private httpClient: HttpClient) {}

  // GET: List all authors
  getAllAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(this.authorUrl);
  }

  // POST: add an author
  addAuthor(author: Author): Observable<Author> {
    return this.httpClient.post<Author>(`${this.authorUrl}/create`, author);
  }
}
