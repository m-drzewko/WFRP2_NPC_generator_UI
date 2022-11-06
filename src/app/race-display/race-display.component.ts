import { Component, OnChanges, OnInit } from '@angular/core';
import { Race } from '../race';
import { RaceDisplayService } from '../race-display.service';

@Component({
  selector: 'app-race-display',
  templateUrl: './race-display.component.html',
  styleUrls: ['./race-display.component.css']
})
export class RaceDisplayComponent implements OnInit, OnChanges {

  races: Race[] = [];

  constructor(private raceDisplayService: RaceDisplayService) { }

  ngOnChanges(): void {
    this.raceDisplayService.getRaces().subscribe(
      (data) => {
        this.races = data;
      }
    )
  }

  ngOnInit(): void {
    this.raceDisplayService.getRaces().subscribe(
      (data) => {
        this.races = data;
      }
    )
  }

}
