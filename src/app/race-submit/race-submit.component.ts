import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-race-submit',
  templateUrl: './race-submit.component.html',
  styleUrls: ['./race-submit.component.css']
})
export class RaceSubmitComponent implements OnInit {

  raceForm: FormGroup;
  //TODO: change all zeroes into <Number>, 
  //as this sets the field to accept numbers only,
  //but does not fill in any number when the form is built 
  constructor(private raceService: RaceService, 
    private formBuilder: FormBuilder) {
      this.raceForm = this.formBuilder.nonNullable.group({
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
     }

  onSubmit(): void {
    let raceFromForm: Race = this.raceForm.value;
    this.raceService.postRace(raceFromForm)
      .subscribe();
  }

  ngOnInit(): void { }

}
