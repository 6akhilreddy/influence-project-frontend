import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiesMainComponent } from './strategies-main.component';

describe('StrategiesMainComponent', () => {
  let component: StrategiesMainComponent;
  let fixture: ComponentFixture<StrategiesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategiesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategiesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
