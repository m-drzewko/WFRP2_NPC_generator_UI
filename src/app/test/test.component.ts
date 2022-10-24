import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { TestService } from '../test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  races: Race[] = [];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getRaces().subscribe(
      (data) => {
        this.races = data;
      }
    )
  }

}
