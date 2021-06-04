import { Component, OnInit } from '@angular/core';
import {IPost} from "../../patterns/post.pattern";
import {PostService} from "../../servises/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

public userId: number;
public posts: IPost[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts(this.userId).subscribe(value => this.posts = value);
  }

}
