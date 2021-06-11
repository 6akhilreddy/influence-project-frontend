import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationMainComponent } from './authentication-main.component';

describe('AuthenticationMainComponent', () => {
  let component: AuthenticationMainComponent;
  let fixture: ComponentFixture<AuthenticationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
