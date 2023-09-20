import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcListItemComponent } from './npc-list-item.component';

describe('NpcListItemComponent', () => {
  let component: NpcListItemComponent;
  let fixture: ComponentFixture<NpcListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
