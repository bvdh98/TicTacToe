import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {
  @Input() value: string;

  @Input() index: number;

  @Input() winningTiles: number[];

  constructor() {}

  /*highlight winning tiles if winning tiles isn`t empty and
  winning tiles contains tile with associated index*/
  highlightWinner(i: number) {
    return this.winningTiles && this.winningTiles.includes(i)
      ? 'winningTile'
      : 'defaultTile';
  }

  ngOnInit(): void {}
}
