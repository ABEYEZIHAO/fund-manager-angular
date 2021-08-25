import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Security} from "./security";
import {SecurityService} from "./security.service";
import{Router} from '@angular/router'

// interface Security {
//   id: string;
//   symbol: string;
// }

@Component({
  selector: 'security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  // securities: Observable<Security[]>;
  securities: Array<any>;
  listOfDisplayData: Array<any>;
  searchValue: string;
  visible: boolean;

  constructor(private securityService:SecurityService,private router:Router) 
  {
    // this.securities =  new Observable;
    // this.securities = this.securityService.getSecurityList();
    this.securities = [];
    this.listOfDisplayData = [];
    this.searchValue = '';
    this.visible = false;
  }

  ngOnInit(): void {
    this.reloadData();
  }

  
  reloadData() {
    // this.securities = this.securityService.getSecurityList();
    this.securityService.getSecurityList().subscribe(data => {
      this.securities = data;
    });
    this.listOfDisplayData = [...this.securities];
  }

  deleteSecurity(id: number) {
    this.securityService.deleteSecurity(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  securityDetails(id: number){
    this.router.navigate(['details', id]);
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfDisplayData.filter((item: Security) => item.symbol.indexOf(this.searchValue) !== -1);
  }

  // listOfData: Security[] = [
  //   {
  //     id: '1',
  //     symbol: 'IBM'
  //   },
  //   {
  //     id: '2',
  //     symbol: 'AAPL'
  //   },
  //   {
  //     id: '3',
  //     symbol: 'C'
  //   }
  // ];

}