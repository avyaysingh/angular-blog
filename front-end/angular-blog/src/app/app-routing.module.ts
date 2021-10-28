import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'authors', component: AuthorsComponent},
  {path: 'add-author', component: AddAuthorComponent},
  {path: 'add-post', component: AddPostComponent},
  {path: 'posts', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
