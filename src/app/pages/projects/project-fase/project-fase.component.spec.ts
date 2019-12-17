import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFaseComponent } from './project-fase.component';

describe('ProjectFaseComponent', () => {
  let component: ProjectFaseComponent;
  let fixture: ComponentFixture<ProjectFaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
