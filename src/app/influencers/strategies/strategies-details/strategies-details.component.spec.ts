import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiesDetailsComponent } from './strategies-details.component';

describe('StrategiesDetailsComponent', () => {
  let component: StrategiesDetailsComponent;
  let fixture: ComponentFixture<StrategiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategiesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
