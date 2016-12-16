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
    // this.blogPosts = this.dataService.getPosts();
    // this.selectedCategory = 'All';
  }

  selectCategory(category) {
    this.selectedCategory = category;
  }

}
