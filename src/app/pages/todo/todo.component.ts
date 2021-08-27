import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  data = [
    'Put our project\'s information into the Introduction page.',
    'Add service layers for the Fund, Manager, and Position modules.',
    'Add this front-end service into our CI/CD pipeline.',
    'Get some sleep after the presentation and wish you all have a good weekend.'
  ];

  constructor(public msg: NzMessageService) { }

  ngOnInit() {
  }


}
