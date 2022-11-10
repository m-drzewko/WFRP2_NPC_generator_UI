import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Race } from '../race';
import { RaceDisplayService } from '../race-display.service';

@Component({
  selector: 'app-race-submit',
  templateUrl: './race-submit.component.html',
  styleUrls: ['./race-submit.component.css']
})
export class RaceSubmitComponent implements OnInit {

  raceForm = this.formBuilder.nonNullable.group({
    name: ['test', Validators.required],
    statsDto: this.formBuilder.nonNullable.group({
      basicWeaponSkill: [0, Validators.required],
      basicBallisticSkill: [0, Validators.required],
      basicStrength: [0, Validators.required],
      basicToughness: [0, Validators.required],
      basicAgility: [0, Validators.required],
      basicIntelligence: [0, Validators.required],
      basicWillPower: [0, Validators.required],
      basicFellowship: [0, Validators.required],
      maxWounds: [0, Validators.required],
      movement: [0, Validators.required]      
    })
  })
  
  constructor(private raceDisplayService: RaceDisplayService,
    private formBuilder: FormBuilder) { }

  onSubmit(): void {
    let raceFromForm: Race = this.raceForm.value;
    console.log(raceFromForm);
    this.raceDisplayService.postRace(raceFromForm)
      .subscribe();
  }

  ngOnInit(): void {
    // this.raceDisplayService.postRace().subscribe();
  }

}
