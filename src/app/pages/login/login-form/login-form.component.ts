import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  img: string;

  ngOnInit() {
    const user = localStorage.getItem('user');
    console.log(user);
    if (user) {
      this.router.navigate(['/projetos']);
    }
    this.img = `./../assets/images/brq-digital-solutions.png`;
  }

  login(email: string, senha: string) {
    const loginUser = this.authService.login(email, senha).then(
      data => {
        console.log(data);
        this.router.navigate(['/projetos']);
      },
      error => {
        console.error(error);
      }
    );
    console.log(loginUser);
  }

}
