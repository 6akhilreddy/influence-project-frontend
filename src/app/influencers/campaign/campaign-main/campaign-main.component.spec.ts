import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignMainComponent } from './campaign-main.component';

describe('CampaignMainComponent', () => {
  let component: CampaignMainComponent;
  let fixture: ComponentFixture<CampaignMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
