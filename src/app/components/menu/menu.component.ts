import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  img: string;

  constructor() { }

  ngOnInit() {
    this.img = `./../assets/images/brq-digital-solutions.png`;
  }

}
