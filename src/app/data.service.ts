import { APPTOPICS } from './appTopics';
import { PROJECTS } from './projects/projects';
import { Project } from './projects/Project';
import { BLOGPOSTS } from './blog/blogPosts';
import { BlogPost } from './blog/BlogPost';
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
    let projects = [];

    this.http.get('http://localhost:8080/projects')
      .subscribe(data => {
        data.json().forEach(project => {
          projects.push(this.createProjectObject(project));
        });
      });

    return projects;
  }

  getPosts() {
    this.http.get('http://localhost:8080/posts')
      .map(response => response.json());
  }

  createProjectObject(json) {
    var p = new Project();
    let screenShots = json.screenshots.split(', ');

    p.id = json.id;
    p.name = json.name;
    p.description = json.description;
    p.technologies = json.technologies;
    p.screenshots = [];
    p.gitHubUrl = json.github_url;
    p.deploymentUrl = json.deployment_url;

    screenShots.forEach(x => {
      p.screenshots.push('/assets/images/' + x);
    });

    return p;
  }

}
