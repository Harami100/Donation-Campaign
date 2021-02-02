import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNgoComponent } from './create-ngo.component';

describe('CreateNgoComponent', () => {
  let component: CreateNgoComponent;
  let fixture: ComponentFixture<CreateNgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
