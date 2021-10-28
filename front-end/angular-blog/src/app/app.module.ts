import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { HeaderComponent } from './components/header/header.component';

// Reactive form module
import { ReactiveFormsModule } from '@angular/forms';

//httpmodule
import {HttpClientModule} from '@angular/common/http';
import { AuthorItemsComponent } from './components/author-items/author-items.component';
import { PostItemsComponent } from './components/post-items/post-items.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    PostsComponent,
    PostDetailComponent,
    HomeComponent,
    AuthorsComponent,
    AddAuthorComponent,
    HeaderComponent,
    AuthorItemsComponent,
    PostItemsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
