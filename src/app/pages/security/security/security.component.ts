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

  isAddModalVisible = false;
  isUpdateModalVisible = false;
  isConfirmLoading = false;

  security: Security = new Security();
  addSubmitted = false;
  updateSubmitted = false;

  constructor(private securityService:SecurityService,private router:Router) 
  {
    // this.securities =  new Observable;
    this.securities = this.securityService.getSecurityList();
  }

  ngOnInit(): void {
    this.reloadData();
  }

  newSecurity(): void {
    this.addSubmitted = false;
    this.updateSubmitted = false;
    this.security = new Security();
  }

  save() {
    console.log(this.security)
    this.securityService
    .createSecurity(this.security).subscribe(data => {
      console.log(data)
      this.security = new Security();
      console.log(this.security);
    }, 
    error => console.log(error));
  }

  update(id: number) {
    console.log("update: " + id + " " + this.security.id + " " + this.security.symbol)
    this.securityService
    .updateSecurity(id, this.security).subscribe(data => {
      console.log(data)
      this.security = new Security();
      console.log(this.security);
    }, 
    error => console.log(error));
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
  updateSecurity(id: number){
    this.router.navigate(['update', id]);
  }

  reset(): void {
    this.searchValue = '';
    // this.search();
  }

  showAddModal(): void {
    this.isAddModalVisible = true;
  }

  showUpdateModal(): void {
    this.isUpdateModalVisible = true;
  }

  handleOk(): void {
    console.log("handleOk: " + this.security.symbol);
    this.isConfirmLoading = true;

    this.addSubmitted = true;
    this.save();
    this.isAddModalVisible = false;
    this.isConfirmLoading = false;
    
    this.reloadData();
  }

  handleUpdate(id: number): void {
    console.log("handleUpdate: " + id + " " + this.security.symbol);
    this.isConfirmLoading = true;

    this.updateSubmitted = true;
    this.update(id);
    this.isUpdateModalVisible = false;
    this.isConfirmLoading = false;
    
    this.reloadData();
  }

  handleCancel(): void {
    this.isAddModalVisible = false;
    this.isUpdateModalVisible = false;
  }

  // listOfDisplayData = [...this.securityService.getSecurityList()];
  // search(): void {
  //   this.visible = false;
  //   this.listOfDisplayData = this.listOfDisplayData.filter((item: Security) => item.symbol.indexOf(this.searchValue) !== -1);
  // }



}