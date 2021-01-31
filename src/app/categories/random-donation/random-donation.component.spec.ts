import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDonationComponent } from './random-donation.component';

describe('RandomDonationComponent', () => {
  let component: RandomDonationComponent;
  let fixture: ComponentFixture<RandomDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
