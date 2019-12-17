import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFaseListComponent } from './project-fase-list.component';

describe('ProjectFaseListComponent', () => {
  let component: ProjectFaseListComponent;
  let fixture: ComponentFixture<ProjectFaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
