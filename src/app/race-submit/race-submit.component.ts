import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RaceDisplayService } from '../race-display.service';

@Component({
  selector: 'app-race-submit',
  templateUrl: './race-submit.component.html',
  styleUrls: ['./race-submit.component.css']
})
export class RaceSubmitComponent implements OnInit {

  raceForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    statsDto: this.formBuilder.nonNullable.group({
      basicWeaponSkill: ['', Validators.required],
      basicBallisticSkill: ['', Validators.required],
      basicStrength: ['', Validators.required],
      basicToughness: ['', Validators.required],
      basicAgility: ['', Validators.required],
      basicIntelligence: ['', Validators.required],
      basicWillPower: ['', Validators.required],
      basicFellowship: ['', Validators.required],
      maxWounds: ['', Validators.required],
      movement: ['', Validators.required]      
    })
  })
  
  constructor(private raceDisplayService: RaceDisplayService,
    private formBuilder: FormBuilder) { }

  onSubmit(): void {
    // this.raceDisplayService.postRace(this.raceForm.value);
  }

  ngOnInit(): void {
    // this.raceDisplayService.postRace().subscribe();
  }

}
