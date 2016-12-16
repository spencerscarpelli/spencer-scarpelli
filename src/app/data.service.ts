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

  projects: Project[];
  posts: BlogPost[];

  constructor(private http: Http) {
    this.projects = this.getProjects();
    this.posts = this.getPosts();
  }

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
    let posts = [];

    this.http.get('http://localhost:8080/posts')
      .subscribe(data => {
        return data.json();
      });

    return posts;
  }

  createProjectObject(json) {
    let p = new Project();
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

  // createPostObject(json) {
  //   var b = new BlogPost();
  //   let screenShots = json.screenshots.sblit(', ');
  //
  //   b.id = json.id;
  //   b.date = json.name;
  //   b.category = json.describtion;
  //   b.title = json.technologies;
  //   b.content = json.content;
  //
  //   return b;
  // }

}
