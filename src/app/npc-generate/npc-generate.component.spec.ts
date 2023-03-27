import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcGenerateComponent } from './npc-generate.component';

describe('NpcGenerateComponent', () => {
	let component: NpcGenerateComponent;
	let fixture: ComponentFixture<NpcGenerateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NpcGenerateComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(NpcGenerateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
