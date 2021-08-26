import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Position} from "../position";
import {PositionService} from "../position-service/position.service";
import{Router} from '@angular/router'


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  positions: Observable<Position[]>;

  constructor(private positionService:PositionService,private router:Router) 
  {
    // this.positions =  new Observable;
    this.positions = this.positionService.getPositionList();
  }

  ngOnInit(): void {
    this.reloadData();
  }

  searchValue = '';
  visible = false;
  reloadData() {
    this.positions = this.positionService.getPositionList();
  }

  deletePosition(id: number) {
    this.positionService.deletePosition(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  positionDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updatePosition(id: number){
    this.router.navigate(['update', id]);
  }

  reset(): void {
    this.searchValue = '';
    // this.search();
  }

  // listOfDisplayData = [...this.positionService.getPositionList()];
  // search(): void {
  //   this.visible = false;
  //   this.listOfDisplayData = this.listOfDisplayData.filter((item: Position) => item.symbol.indexOf(this.searchValue) !== -1);
  // }



}