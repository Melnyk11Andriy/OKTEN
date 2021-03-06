import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  goToDetails(): void {
    console.log(this.user);
    //users/:id
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }

}
