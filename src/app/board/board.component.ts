import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  cells: string[];

  constructor() {}

  ngOnInit(): void {
    this.start()
  }

  start() {
    this.cells = Array(9).fill(null);
  }
}
