import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectComponent } from './project/project.component';
import { ProjectFaseFormComponent } from './project-fase-form/project-fase-form.component';
import { ProjectFaseListComponent } from './project-fase-list/project-fase-list.component';
import { ProjectFaseComponent } from './project-fase/project-fase.component';

const routes: Routes = [
  // Lista de Projetos
  { path: '', component: ProjectListComponent },
  // Cadastrar Projeto
  { path: 'cadastrar-projeto', component: ProjectFormComponent },
  // Mostrar Projeto
  { path: ':id_projeto', component: ProjectComponent },
  // Editar Projeto
  { path: ':id_projeto/editar', component: ProjectFormComponent },
  // Cadastrar Fase do Projeto
  { path: ':id_projeto/cadastrar-fase', component: ProjectFaseFormComponent },
  // Mostrar Fases do Projeto
  { path: ':id_projeto/fases', component: ProjectFaseListComponent },
  // Mostrar Fase do Projeto
  { path: ':id_projeto/:numero_fase', component: ProjectFaseComponent },
  // Editar Fase do Projeto
  { path: ':id_projeto/:numero_fase/editar', component: ProjectFaseFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
