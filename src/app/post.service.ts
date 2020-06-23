import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  createAndStoreData(userObject) {
    this.http
      .post('https://recipe-train.firebaseio.com/logins.json', userObject)
      .subscribe((data) => {
        console.log(data);
      });
  }

  getActiveUsers() {
    return this.http
      .get<Post>('https://recipe-train.firebaseio.com/logins.json')
      .pipe(
        map((data) => {
          const postArray: Post[] = [];
          for (let keys in data) postArray.push({ data: data[keys], id: keys });
          return postArray;
        })
      );
  }
}
