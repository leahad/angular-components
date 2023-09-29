import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  isHidden: boolean = false;

  toggleElement() {
    this.isHidden = !this.isHidden;
  }

  user = new User('Doe', 'John', 25, ' ', 'https://randomuser.me/api/portraits/lego/2.jpg');

};
