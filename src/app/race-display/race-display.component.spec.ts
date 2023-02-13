import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceDisplayComponent } from './race-display.component';

describe('RaceDisplayComponent', () => {
	let component: RaceDisplayComponent;
	let fixture: ComponentFixture<RaceDisplayComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RaceDisplayComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(RaceDisplayComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
