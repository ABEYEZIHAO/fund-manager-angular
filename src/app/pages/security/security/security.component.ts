import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Security } from "../security";
import { SecurityService } from "../security-service/security.service";
import { Router } from '@angular/router'


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  securities: Observable<Security[]>;
  searchValue = '';
  visible = false;
  isModalVisible = false;
  isConfirmLoading = false;

  security: Security = new Security();
  submitted = false;

  constructor(private securityService:SecurityService,private router:Router) 
  {
    // this.securities =  new Observable;
    this.securities = this.securityService.getSecurityList();
  }

  ngOnInit(): void {
    this.reloadData();
  }

  newSecurity(): void {
    this.submitted = false;
    this.security = new Security();
  }

  save() {
    console.log(this.security)
    this.securityService
    .createSecurity(this.security).subscribe(data => {
      console.log(data)
      this.security = new Security();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.security);
    this.submitted = true;
    this.save();    
  }

  reloadData() {
    this.securities = this.securityService.getSecurityList();
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
    // this.search();
  }

  showModal(): void {
    this.isModalVisible = true;
  }

  handleOk(): void {
    console.log(this.security);
    this.isConfirmLoading = true;
    this.onSubmit();
    setTimeout(() => {
      this.isModalVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
    
  }

  handleCancel(): void {
    this.isModalVisible = false;
  }

  // listOfDisplayData = [...this.securityService.getSecurityList()];
  // search(): void {
  //   this.visible = false;
  //   this.listOfDisplayData = this.listOfDisplayData.filter((item: Security) => item.symbol.indexOf(this.searchValue) !== -1);
  // }

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