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
    var projects = [];

    this.http.get('http://localhost:8080/projects')
      .subscribe(data => {
        data.json().forEach(project => { // NOT WORKING
          // console.log('hi ' + project.description);
          projects.push(project);
          // console.log(projects);
        });
      });

    return projects;
  }

  getPosts() {
    this.http.get('http://localhost:8080/posts')
      .map(response => response.json());
  }

  createProjectObject(json) {
    let p = new Project();

    p.id = json.id;
    p.name = json.name;
    p.description = json.description;
    p.technologies = json.technologies;
    p.screenshots = json.screenshots.split(', ').map(x => {
      x = '/assets/images/' + x;
    });
    p.gitHubUrl = json.github_url;
    p.deploymentUrl = json.deployment_url;

    return p;
  }

}
