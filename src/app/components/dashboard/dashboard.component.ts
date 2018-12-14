import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  levels: string[] = ['level 1', 'level 2', 'level 3'];
  elements = [
    {
      id: 1,
      level: this.levels[0],
      name: 'VRP 1',
    },
    {
      id: 2,
      level: this.levels[0],
      name: 'VRP 2',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
