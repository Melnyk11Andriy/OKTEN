import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: IUser[]/* = [];-absolutly unnecessary*/
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPosts().subscribe(value => this.users = value);
  }

}
