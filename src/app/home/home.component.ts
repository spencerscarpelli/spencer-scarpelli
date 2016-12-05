import { Component, OnInit } from '@angular/core';
import { AppTopic } from '../appTopic';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appTopics: AppTopic[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.appTopics = this.dataService.getTopics();
  }
}
