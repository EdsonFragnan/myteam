import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  url: string;
  novaFase: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.url = this.router.url.replace('/projetos/', '');
    this.novaFase = this.router.url + '/cadastrar-fase';
  }

}
