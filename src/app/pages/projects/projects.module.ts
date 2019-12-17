import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { ProjectComponent } from './project/project.component';
import { ProjectFaseFormComponent } from './project-fase-form/project-fase-form.component';
import { ProjectFaseListComponent } from './project-fase-list/project-fase-list.component';
import { ProjectFaseComponent } from './project-fase/project-fase.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectFormComponent, MenuComponent, ProjectComponent, ProjectFaseFormComponent, ProjectFaseListComponent, ProjectFaseComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
