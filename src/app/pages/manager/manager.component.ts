import { Component, OnInit } from '@angular/core';

interface Manager {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
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

  searchValue = '';
  visible = false;

  listOfData: Manager[] = [
    {
      id: '1',
      firstName: 'Terry',
      lastName: 'Jones',
      fullName: 'terry Jones',
      fund: 'Olympic Memorial Fund'
    },
    {
      id: '1',
      firstName: 'Terry',
      lastName: 'Jones',
      fullName: 'terry Jones',
      fund: 'UK Overseas Income Fund'
    },
    {
      id: '2',
      firstName: 'Mike',
      lastName: 'Smith',
      fullName: 'Mike Smith',
      fund: 'North America Growth'
    },
    {
      id: '2',
      firstName: 'Mike',
      lastName: 'Smith',
      fullName: 'Mike Smith',
      fund: 'Global Tech Fund'
    }
  ];

  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: Manager) => item.fullName.indexOf(this.searchValue) !== -1);
  }

}
