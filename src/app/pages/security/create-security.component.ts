import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Security} from "./security";
import {SecurityService} from "./security.service";
import{Router} from '@angular/router'

@Component({
    selector: 'app-security',
    templateUrl: './security.component.html',
    styleUrls: ['./security.component.css']
  })
export class CreateSecurityComponent implements OnInit {

  security: Security = new Security(4,"Abb");
  submitted = false;

  constructor(private securityService: SecurityService,
    private router: Router) { }

  ngOnInit() {
  }

  newSecurity(): void {
    this.submitted = false;
    this.security = new Security(5,"Abb");
  }

  save() {
    this.securityService
    .createSecurity(this.security).subscribe(data => {
      console.log(data)
      this.security = new Security(6,"Abb");
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/securities']);
  }
}