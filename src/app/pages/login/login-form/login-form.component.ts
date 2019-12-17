import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  img: string;

  ngOnInit() {
    this.img = `./../assets/images/brq-digital-solutions.png`;
  }

}
