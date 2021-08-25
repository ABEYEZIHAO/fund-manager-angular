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

  listOfData: Security[] = [
    {
      id: '1',
      symbol: 'John Brown'
    },
    {
      id: '2',
      symbol: 'Jim Green'
    },
    {
      id: '3',
      symbol: 'Joe Black'
    }
  ];

}