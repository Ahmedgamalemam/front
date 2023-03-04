import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDashComponent } from './pet-dash.component';

describe('PetDashComponent', () => {
  let component: PetDashComponent;
  let fixture: ComponentFixture<PetDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
