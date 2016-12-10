import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BlogPost } from './BlogPost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[];
  categories = ['Coding', 'Reads', 'Music', 'Other'];
  selectedCategory: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.blogPosts = this.dataService.getBlogPosts();
    this.selectedCategory = 'Coding';
  }

  selectCategory(category) {
    this.selectedCategory = category;
  }

}
