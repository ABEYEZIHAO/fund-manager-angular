import { SecurityService } from '../security-service/security.service';
import { Security } from '../security';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-security',
  templateUrl: './create-security.component.html',
  styleUrls: ['./create-security.component.css']
})
export class CreateSecurityComponent implements OnInit {

  security: Security = new Security();
  submitted = false;

  constructor(private securityService: SecurityService,
    private router: Router) { }

  ngOnInit() {
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
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['security']);
  }
}
