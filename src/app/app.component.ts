import { Component } from '@angular/core';
import { AppTopic } from './appTopic';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'root';
  appTopics: AppTopic[];

  constructor() { }

  ngOnInit() {
  }
}
