import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NpcService } from '../npc-service';
import { RaceService } from '../race.service';
import { Race } from '../race';

@Component({
	selector: 'app-npc-generate',
	templateUrl: './npc-generate.component.html',
	styleUrls: ['./npc-generate.component.css']
})
export class NpcGenerateComponent implements OnInit {

	npcGenerateForm: FormGroup;

	races: Array<Race> = new Array<Race>;


	constructor(npcService: NpcService,
		private raceService: RaceService,
		private formBuilder: FormBuilder) {
		this.npcGenerateForm = this.formBuilder.nonNullable.group({
			race: ['', Validators.required],
			gender: ['', Validators.required]
		})
	}

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

	onSubmit(): void {

	}

}
