import { APPTOPICS } from './appTopics';
import { PROJECTS } from './projects/projects';
import { BLOGPOSTS } from './blog/blogPosts';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  private currentPageSource = new Subject<string>();

  currentPage$ = this.currentPageSource.asObservable();

  setPage(page: string) {
    this.currentPageSource.next(page);
  }

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
