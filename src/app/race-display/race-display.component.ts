import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-race-display',
  templateUrl: './race-display.component.html',
  styleUrls: ['./race-display.component.css']
})
export class RaceDisplayComponent implements OnInit {

  races: Race[] = [];

  constructor(private raceService: RaceService) { }

  ngOnInit(): void {
    this.raceService.getRaces().subscribe(
      (data) => {
        this.races = data;
      }
    )
  }

}
