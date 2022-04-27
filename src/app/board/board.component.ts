import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  cells: string[];
  isPlayerXTurn: boolean;
  winner: string | null;

  constructor() {}

  ngOnInit(): void {
    this.start();
  }

  getPlayersTurn() {
    return this.isPlayerXTurn ? 'X' : 'O';
  }

  /*I made this algorithm which is O(1) complexity
  but I couldn`t figure out how to implement it*/
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
    this.winner = this.findWinner();
  }

  isTie() {
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i] === null) {
        return false;
      }
    }
    return true;
  }

  findWinner() {
    const board = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < board.length; i++) {
      const [a, b, c] = board[i];
      console.log(a)
      if (
        this.cells[a] &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]
      ) {
        return this.cells[a];
      }
    }
    if (this.isTie()) {
      return 'Tie';
    }
    else{
      return null;
    }
  }

  start() {
    this.cells = Array(9).fill(null);
    this.winner = null;
    this.isPlayerXTurn = true;
  }
}
