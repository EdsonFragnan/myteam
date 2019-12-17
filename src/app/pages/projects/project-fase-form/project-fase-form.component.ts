import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-fase-form',
  templateUrl: './project-fase-form.component.html',
  styleUrls: ['./project-fase-form.component.css']
})
export class ProjectFaseFormComponent implements OnInit {

  id_fase: string;
  url: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.id_fase = this.router.url.replace('/projetos/', '');
    this.url = this.id_fase.replace('/cadastrar-fase', '');
  }

}
