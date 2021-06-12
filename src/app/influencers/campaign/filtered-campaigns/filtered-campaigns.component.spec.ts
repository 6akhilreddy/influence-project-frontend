import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredCampaignsComponent } from './filtered-campaigns.component';

describe('FilteredCampaignsComponent', () => {
  let component: FilteredCampaignsComponent;
  let fixture: ComponentFixture<FilteredCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredCampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
