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
    name: ['', Validators.required],
    stats: this.formBuilder.nonNullable.group({
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
    let raceFromForm: Race = {
      name: this.raceForm.controls.name.value,
      stats: {
        basicWeaponSkill: this.raceForm.controls.stats.controls.basicWeaponSkill.value,
        basicBallisticSkill: this.raceForm.controls.stats.controls.basicBallisticSkill.value,
        basicStrength: this.raceForm.controls.stats.controls.basicStrength.value,
        basicToughness: this.raceForm.controls.stats.controls.basicToughness.value,
        basicAgility: this.raceForm.controls.stats.controls.basicAgility.value,
        basicIntelligence: this.raceForm.controls.stats.controls.basicIntelligence.value,
        basicWillPower: this.raceForm.controls.stats.controls.basicWillPower.value,
        basicFellowship: this.raceForm.controls.stats.controls.basicFellowship.value,
        maxWounds: this.raceForm.controls.stats.controls.maxWounds.value,
        movement: this.raceForm.controls.stats.controls.movement.value
      }
    };
    console.log(raceFromForm);
    this.raceDisplayService.postRace(raceFromForm)
      .subscribe();
  }

  ngOnInit(): void {
    // this.raceDisplayService.postRace().subscribe();
  }

}
