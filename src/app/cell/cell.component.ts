import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  template: `
    <button [className]="'col-4'" *ngIf="!value">{{value}}</button>
    <button [className]="'class' + 'x-button'" *ngIf="value === 'X'">{{value}}</button>
    <button [className]="'class' + 'o-button'" *ngIf="value === 'O'">{{value}}</button>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() value: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
