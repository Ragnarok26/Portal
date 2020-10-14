import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Output() public data = new EventEmitter<any>();

  minMenu: boolean = true;
  userName: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userName = this.userService.userSes.name;
  }

  load(show: string) {
    if (show == "in") {
      this.minMenu = true;
    }
    else { this.minMenu = false; }
  }

}
