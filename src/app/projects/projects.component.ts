import { Component, OnInit } from '@angular/core';
import { Project } from './Project';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.projects = this.dataService.getProjects();
    this.selectedProject = this.projects[this.projects.length - 1];
  }

  selectProject(project) {
    this.selectedProject = project;
  }

}
