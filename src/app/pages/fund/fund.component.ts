import { Component, OnInit } from '@angular/core';

interface Fund {
  id: string;
  name: string;
  manager: string;
  security: string;
  quantity: number;
  date: Date;
}

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listOfData: Fund[] = [
    {
      id: '1',
      name: 'Olympic Memorial Fund',
      manager: 'Terry Jones',
      security: 'IBM',
      quantity: 100,
      date: new Date(2016, 0, 10)
    },
    {
      id: '1',
      name: 'Olympic Memorial Fund',
      manager: 'Terry Jones',
      security: 'IBM',
      quantity: 250,
      date: new Date(2016, 8, 23)
    },
    {
      id: '2',
      name: 'UK Overseas Income Fund',
      manager: 'Terry Jones',
      security: 'IBM',
      quantity: 200,
      date: new Date(2016, 7, 14)
    },
    {
      id: '3',
      name: 'North America Growth',
      manager: 'Mike Smith',
      security: 'AAPL',
      quantity: 100,
      date: new Date(2016, 8, 23)
    },
    {
      id: '4',
      name: 'Global Tech Fund',
      manager: 'Mike Smith',
      security: 'C',
      quantity: 75,
      date: new Date(2017, 0, 27)
    },
  ]

}
