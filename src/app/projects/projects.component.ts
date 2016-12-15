import { Component, OnInit } from '@angular/core';
import { Project } from './Project';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects;
  selectedProject: Project;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.projects = this.dataService.getProjects().reverse();
    // this.selectedProject = this.projects[0];
    this.dataService.getProjects()
      .subscribe(projects => {
        this.projects = projects;
        console.log(projects);
      });
  }

  selectProject(project) {
    this.selectedProject = project;
  }

}
