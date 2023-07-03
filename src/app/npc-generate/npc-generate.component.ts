import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NpcService } from '../services/npc-service';
import { RaceService } from '../services/race.service';
import { Race } from '../shared/model/race';
import { Npc } from '../shared/model/npc';
import { SingleResponseObject } from '../shared/response/single-response-object';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-npc-generate',
	templateUrl: './npc-generate.component.html',
	styleUrls: ['./npc-generate.component.css']
})
export class NpcGenerateComponent implements OnInit {

	npcGenerateForm: FormGroup;
	default: string = 'random';
	raceNames: string[] = ['random'];
	races: Array<Race> = new Array<Race>;
	npc!: Npc;
	serverErrorFlag: boolean = false;
	isNpcGenerated: boolean = false;

	constructor(private npcService: NpcService,
		private raceService: RaceService,
		private formBuilder: FormBuilder) {
		this.npcGenerateForm = this.formBuilder.nonNullable.group({
			race: ['', Validators.required],
			gender: ['', Validators.required]
		});
		this.npcGenerateForm.controls['race'].setValue(this.default, {onlySelf: true});
		this.npcGenerateForm.controls['gender'].setValue(this.default, {onlySelf: true});
	}

	async ngOnInit(): Promise<void> {
		this.raceService.getRaces().subscribe(
			(data) => {
				this.races = data.object;
				console.log(this.races);
				this.races.forEach(race => this.raceNames.push(race.name));
				console.log(this.raceNames);
			}, (error: HttpErrorResponse) => {
				console.log(error.message);
				this.serverErrorFlag = true;
			}
		)
	}

	onSubmit(): void {
		console.log(this.npcGenerateForm.value);
		this.npcService.generateNpc(this.npcGenerateForm.get(["race"])?.value, this.npcGenerateForm.get(["gender"])?.value).subscribe(
			(response: SingleResponseObject) => {
				console.log(response);
				this.npc = response.object;
				this.isNpcGenerated = true;
			}, 
			(error: HttpErrorResponse) => {
				console.log(error);
			}
		);
	}

	onClick(): void {
		console.log("switching flag " + this.serverErrorFlag);
		this.serverErrorFlag = false;
	}
}
