import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceSubmitComponent } from './race-submit.component';

describe('RaceSubmitComponent', () => {
  let component: RaceSubmitComponent;
  let fixture: ComponentFixture<RaceSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
