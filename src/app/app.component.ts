import { Component } from '@angular/core';
import { AppTopic } from './AppTopic';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'root';
  appTopics: AppTopic[];
  selectedTopic: string;
  currentRoute: string;
  currentPage: string;

  constructor(private dataService: DataService, private location: Location) {
    this.currentPage = location.path();
  }

  ngOnInit() {
  }

}
