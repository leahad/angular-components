import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/shared-components/models/user.model';
import { UserService } from 'src/app/modules/shared-components/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: '../../pages/account.component.html',
  styleUrls: ['../../pages/account.component.css']
})
export class AccountComponent implements OnInit{

  users: User[] = [];
  randomUser: User | null = null;
  user: User | null = null;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.userService.getUsers().subscribe((usersFromJsonFile) => {
          this.users = usersFromJsonFile;

          const id = this.route.snapshot.paramMap.get('id')!;
          const foundUser = this.users.find(user => user.id === parseInt(id, 10));

          if (foundUser) {
            this.user = foundUser;
          } else {
            this.user = null;
          }
      });
    }

  // User aléatoire
  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe((usersFromJsonFile) => {
  //     this.users = usersFromJsonFile;

  //     const randomIndex = Math.floor(Math.random() * this.users.length);
  //     this.randomUser = this.users[randomIndex];
  //   });
  // }
}
