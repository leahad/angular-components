import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/shared-components/models/user.model';
import { UserService } from 'src/app/modules/shared-components/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: '../../pages/admin.component.html',
  styleUrls: ['../../pages/admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[] = [];

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((usersFromJsonFile) => {
      this.users = usersFromJsonFile;
    });
  }

}
