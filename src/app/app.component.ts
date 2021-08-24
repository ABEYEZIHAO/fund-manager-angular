import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public menuList = [{
    title: "Dashboard",
    icon: "dashboard",
    secMenu:[{
      routerLink: "/home",
      menuName: "Home"
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
    title: "loopMenu2",
    icon: "form",
    secMenu:[{
      routerLink: "/menus2",
      menuName: "menu_2_1"
    },{
      routerLink: "/menus3",
      menuName: "menu_2_2"
    }]
  }
]

  isCollapsed = false;
}
