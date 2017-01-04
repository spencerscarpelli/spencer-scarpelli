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
  categories = ['All', 'Coding', 'Reads', 'Music', 'Other'];
  selectedCategory: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.blogPosts = this.dataService.posts;
    setTimeout(() => {
      this.selectedCategory = 'All';
    }, 100);
  }

  selectCategory(category) {
    this.selectedCategory = category;
  }

}
