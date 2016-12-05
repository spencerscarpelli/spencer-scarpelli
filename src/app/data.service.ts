import { APPTOPICS } from './appTopics';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  getTopics() {
    return APPTOPICS;
  }
}
