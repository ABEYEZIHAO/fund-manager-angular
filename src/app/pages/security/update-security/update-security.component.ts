import { Component, OnInit } from '@angular/core';
import { Security } from '../security';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from '../security-service/security.service';

@Component({
  selector: 'app-update-security',
  templateUrl: './update-security.component.html',
  styleUrls: ['./update-security.component.css']
})
export class UpdateSecurityComponent implements OnInit {

  id!: number;
  security!: Security;

  constructor(private route: ActivatedRoute,private router: Router,
    private securityService: SecurityService) { }

  ngOnInit() {
    this.security = new Security();

    this.id = this.route.snapshot.params['id'];
    
    this.securityService.getSecurity(this.id)
      .subscribe(data => {
        console.log(data)
        this.security = data;
      }, error => console.log(error));
  }

  updateSecurity() {
    this.securityService.updateSecurity(this.id, this.security)
      .subscribe(data => {
        console.log(data);
        this.security = new Security();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSecurity();    
  }

  gotoList() {
    this.router.navigate(['security']);
  }
}
