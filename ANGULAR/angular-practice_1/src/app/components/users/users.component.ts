import { Component, OnInit } from '@angular/core';
import {IUser} from "../../patterns/user.pattern";
import {UserService} from "../../servises/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: IUser[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

}
