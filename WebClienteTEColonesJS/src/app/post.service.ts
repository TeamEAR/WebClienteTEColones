import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {
  constructor(private http: Http) {
    }
  getPosts(endPath: string) {
    return this.http.get('https://webapitecolones.azurewebsites.net/api/' + endPath).pipe(map(res => res.json()));
  }

}
