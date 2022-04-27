import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  cells: string[];
  isPlayerXTurn: boolean;

  constructor() {}

  ngOnInit(): void {
    this.start();
  }

  getPlayersTurn() {
    return this.isPlayerXTurn ? 'X' : 'O';
  }

  updateCell(index: number): void {
    if (!this.cells[index]) {
      this.cells.splice(index,1,this.getPlayersTurn())
      this.isPlayerXTurn = !this.isPlayerXTurn;
    }
  }

  start() {
    this.cells = Array(9).fill(null);
    this.isPlayerXTurn = true;
  }
}
