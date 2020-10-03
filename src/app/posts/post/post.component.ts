import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  isLoading: boolean = true;
  post: Post;

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const postId = this.activatedRoute.snapshot.params['id'];
    this.postsService.getPost(postId).subscribe(postData => {
      this.post = postData;
      this.isLoading = false;
    });
  }

}
