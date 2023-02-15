import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
	selector: 'app-race-display',
	templateUrl: './race-display.component.html',
	styleUrls: ['./race-display.component.css']
})
export class RaceDisplayComponent implements OnInit {

	races: Array<Race> = new Array<Race>;

	constructor(private raceService: RaceService) { }

	ngOnInit(): void {
		this.raceService.getRaces().subscribe(
			(data) => {
				this.races = data.object;
				this.races.forEach(race => {
					race.eyeColors = race.eyeColors.filter((value, index) => race.eyeColors.indexOf(value) === index)
					race.hairColors = race.hairColors.filter((value, index) => race.hairColors.indexOf(value) === index)
				})
				console.log(this.races);
			}
		)
	}
}
