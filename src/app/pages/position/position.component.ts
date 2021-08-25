import { Component, OnInit } from '@angular/core';

interface Position {
  id: string;
  symbol: string;
  quantity: number;
  date: Date;
}

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listOfData: Position[] = [
    {
      id: '1',
      symbol: 'IBM',
      quantity: 100,
      date: new Date(2016, 0, 16)
    },
    {
      id: '2',
      symbol: 'IBM',
      quantity: 250,
      date: new Date(2016, 8, 23)
    },
    {
      id: '3',
      symbol: 'IBM',
      quantity: 200,
      date: new Date(2016, 7, 14)
    },
    {
      id: '4',
      symbol: 'AAPL',
      quantity: 125,
      date: new Date(2016, 8, 23)
    },
    {
      id: '5',
      symbol: 'C',
      quantity: 75,
      date: new Date(2017, 0, 27)
    }
  ];

}
