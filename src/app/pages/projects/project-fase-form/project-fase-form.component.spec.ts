import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFaseFormComponent } from './project-fase-form.component';

describe('ProjectFaseFormComponent', () => {
  let component: ProjectFaseFormComponent;
  let fixture: ComponentFixture<ProjectFaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
