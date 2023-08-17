import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcsDisplayComponent } from './npcs-display.component';

describe('NpcsDisplayComponent', () => {
  let component: NpcsDisplayComponent;
  let fixture: ComponentFixture<NpcsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
