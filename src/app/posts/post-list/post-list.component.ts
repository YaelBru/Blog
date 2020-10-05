import { Component, OnInit, Input, HostListener } from "@angular/core";
import { PostsService } from "../posts.service";
import { Post } from "../post";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit {
  @Input() searchQuery: string = "";

  isLoading: boolean = true;
  innerWidth: number;
  posts: Post[] = [];

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.posts$.subscribe((posts: Post[]) => {
      this.posts = posts;
      this.isLoading = false;
    });
    this.innerWidth = window.innerWidth;
  }
}
