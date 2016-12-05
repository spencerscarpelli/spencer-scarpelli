import { Component } from '@angular/core';
import { AppTopic } from './appTopic';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  appTopics: AppTopic[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.appTopics = this.dataService.getTopics();
  }
}
