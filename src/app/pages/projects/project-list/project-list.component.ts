import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  items: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.items = [65433, 12345, 54321];
  }

}
