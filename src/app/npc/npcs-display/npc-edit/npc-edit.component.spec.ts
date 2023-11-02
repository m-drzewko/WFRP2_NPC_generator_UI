import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcEditComponent } from './npc-edit.component';

describe('NpcEditComponent', () => {
  let component: NpcEditComponent;
  let fixture: ComponentFixture<NpcEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
