import { APPTOPICS } from './appTopics';
import { PROJECTS } from './projects/projects';
import { BLOGPOSTS } from './blog/blogPosts';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getTopics() {
    return APPTOPICS;
  }

  getProjects() {
    // return PROJECTS;
    return this.http.get('http://localhost:8080')
      .map(response => <Object[]>response.json().data);
  }

  getBlogPosts() {
    return BLOGPOSTS;
  }

}
