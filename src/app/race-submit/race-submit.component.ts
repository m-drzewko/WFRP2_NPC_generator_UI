import { Component, OnInit } from '@angular/core';
import { RaceDisplayService } from '../race-display.service';

@Component({
  selector: 'app-race-submit',
  templateUrl: './race-submit.component.html',
  styleUrls: ['./race-submit.component.css']
})
export class RaceSubmitComponent implements OnInit {

  constructor(private raceDisplayService: RaceDisplayService) { }

  ngOnInit(): void {
    this.raceDisplayService.postRace().subscribe();
  }

}
