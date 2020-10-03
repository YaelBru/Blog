import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPostsList(): Observable<any> {
    return this.http.get('https://yb-blog-4c214.firebaseio.com/posts.json').pipe(
      map(resData => {
        const postsList: Post[] = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            postsList.push({ ...resData[key], id: key });
          }
        };
        return postsList;
      }));
  }

  getPost(postId): Observable<any> {
    return this.http.get(`https://yb-blog-4c214.firebaseio.com/posts/${postId}.json`)
  }
}
