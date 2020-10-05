import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostsService {

  posts$ = new BehaviorSubject([]);
  initPosts = [];

  constructor(private http: HttpClient) {
    this.getPostsList();
  }

  search(value: string) {
    if (!value) {
      this.posts$.next(this.initPosts);
    } else {
      let filteredPosts = this.initPosts.filter((post) =>
        post.postTitle.toLowerCase().includes(value.toLowerCase())
      );
      this.posts$.next(filteredPosts);
    }
  }

  getPostsList() {
    let posts = [];
    return this.http
      .get("https://yb-blog-4c214.firebaseio.com/posts.json")
      .pipe(
        map((resData) => {
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              posts.push({ ...resData[key], id: key });
            }
          }
          this.initPosts = posts;
          this.posts$.next(posts);
        })
      ).subscribe();
  }

  getPost(postId): Observable<any> {
    return this.http.get(
      `https://yb-blog-4c214.firebaseio.com/posts/${postId}.json`
    );
  }
}
