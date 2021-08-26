import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public menuList = [{
    title: "Home",
    icon: "home",
    secMenu:[{
      routerLink: "/home",
      menuName: "Introduction"
    },{
      routerLink: "/fund",
      menuName: "Fund"
    },{
      routerLink: "/manager",
      menuName: "Manager"
    },{
      routerLink: "/security",
      menuName: "Security"
    },{
      routerLink: "/position",
      menuName: "Position"
    }]
  },{
    title: "TODO",
    icon: "form",
    secMenu:[{
      routerLink: "/todo",
      menuName: "Our todo list"
    }]
  }]

  isCollapsed = false;
}
