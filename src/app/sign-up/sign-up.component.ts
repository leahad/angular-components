import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

model: User = new User("","","","");

onSubmit(): void {
  // Formulaire envoyé
  console.log(this.model);
}

}

export class User {
  constructor(
    public email: string,
    public firstname: string,
    public lastname: string,
    public password: string
    ) {}
}
