import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseMeButtonComponent } from './surprise-me-button.component';

describe('SurpriseMeButtonComponent', () => {
  let component: SurpriseMeButtonComponent;
  let fixture: ComponentFixture<SurpriseMeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurpriseMeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurpriseMeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
