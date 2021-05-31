import { Component, OnInit } from '@angular/core';
import {IPost} from "../models/post";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: IPost[] = [];

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => {
      console.log(value);
      this.posts = value;
    });
  }

}