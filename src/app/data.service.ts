import { APPTOPICS } from './appTopics';
import { PROJECTS } from './projects/projects';
import { BLOGPOSTS } from './blog/blogPosts';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  getTopics() {
    return APPTOPICS;
  }

  getProjects() {
    return PROJECTS;
  }

  getBlogPosts() {
    return BLOGPOSTS;
  }

}
