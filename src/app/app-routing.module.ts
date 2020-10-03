import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './posts/post/post.component';
import { PostListComponent } from './posts/post-list/post-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blogjs' },
  {
    path: '', component: HomeComponent, children: [
      { path: 'blogjs', component: PostListComponent },
      { path: 'post/:id', component: PostComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
 
  //TODO: name of path 'my-blog'
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
