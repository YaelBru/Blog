import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { PostsService } from "../posts/posts.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  @Output() searchQuery = new EventEmitter();
  searchForm = new FormControl("");

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.searchForm.valueChanges.subscribe((value) => {
      this.postsService.search(value);
    });
  }
}
