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

  playerXWon(r: number, c: number) {
    let row = Array(3).fill(0);
    let column = Array(3).fill(0);
    let diag = Array(3).fill(0);
    let leftDiag = Array(3).fill(0);

    const board = [
      this.cells.slice(0, 3),
      this.cells.slice(3, 6),
      this.cells.slice(6, 9),
    ];
    const boardSize = board[0].length;
    row[r]++;
    column[c]++;
    if (r == c) {
      diag[r]++;
    }
    if (r + c == boardSize) {
      leftDiag[r]++;
    }
    if (
      row[r] == boardSize ||
      column[c] == boardSize ||
      diag[r] == boardSize ||
      leftDiag[r] == boardSize
    ) {
      return true;
    } else {
      return false;
    }
  }

  updateCell(index: number): void {
    if (!this.cells[index]) {
      this.cells.splice(index, 1, this.getPlayersTurn());
      this.isPlayerXTurn = !this.isPlayerXTurn;
    }
  }

  start() {
    this.cells = Array(9).fill(null);
    this.isPlayerXTurn = true;
  }
}
