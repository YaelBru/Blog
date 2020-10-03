import { Component, OnInit, HostListener } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],

})
export class PostListComponent implements OnInit {

  isLoading: boolean = true;
  innerWidth: number;
  posts: Post[] = [];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPostsList().subscribe(
      list => {
        this.posts = list;
        this.isLoading = false;
      });
    this.innerWidth = window.innerWidth;
  }

}
