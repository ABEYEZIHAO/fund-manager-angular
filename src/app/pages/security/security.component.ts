import { Component, OnInit } from '@angular/core';

interface Security {
  id: string;
  symbol: string;
}

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchValue = '';
  visible = false;

  listOfData: Security[] = [
    {
      id: '1',
      symbol: 'IBM'
    },
    {
      id: '2',
      symbol: 'AAPL'
    },
    {
      id: '3',
      symbol: 'C'
    }
  ];

  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: Security) => item.symbol.indexOf(this.searchValue) !== -1);
  }

}