import { APPTOPICS } from './appTopics';
import { PROJECTS } from './projects/projects';
import { BLOGPOSTS } from './blog/blogPosts';
import { Injectable } from '@angular/core';

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
