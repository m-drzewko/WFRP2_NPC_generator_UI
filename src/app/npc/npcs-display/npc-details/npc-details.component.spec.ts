import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcDetailsComponent } from './npc-details.component';

describe('NpcDetailsComponent', () => {
  let component: NpcDetailsComponent;
  let fixture: ComponentFixture<NpcDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
