import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVerifyEmailComponent } from './login-verify-email.component';

describe('LoginVerifyEmailComponent', () => {
  let component: LoginVerifyEmailComponent;
  let fixture: ComponentFixture<LoginVerifyEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginVerifyEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
