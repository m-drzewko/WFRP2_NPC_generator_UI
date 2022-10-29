import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RaceDisplayService } from '../race-display.service';

@Component({
  selector: 'app-race-display',
  templateUrl: './race-display.component.html',
  styleUrls: ['./race-display.component.css']
})
export class RaceDisplayComponent implements OnInit {

  races: Race[] = [];

  constructor(private raceDisplayService: RaceDisplayService) { }

  ngOnInit(): void {
    this.raceDisplayService.getRaces().subscribe(
      (data) => {
        this.races = data;
      }
    )
  }

}
