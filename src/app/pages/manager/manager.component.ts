import { Component, OnInit } from '@angular/core';

interface Manager {
  id: string;
  firstName: string;
  lastName: string;
  fund: string;
}

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listOfData: Manager[] = [
    {
      id: '1',
      firstName: 'Terry',
      lastName: 'Jones',
      fund: 'Olympic Memorial Fund'
    },
    {
      id: '1',
      firstName: 'Terry',
      lastName: 'Jones',
      fund: 'UK Overseas Income Fund'
    },
    {
      id: '2',
      firstName: 'Mike',
      lastName: 'Smith',
      fund: 'North America Growth'
    },
    {
      id: '2',
      firstName: 'Mike',
      lastName: 'Smith',
      fund: 'Global Tech Fund'
    }
  ];

}
