import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.less']
})
export class WidgetsComponent implements OnInit {

  public business;
  
  constructor(private router: Router, private _data: BusinessService) { }

  ngOnInit() {
    this.business = this._data.getBusiness();
  }
  
  onBackward() {
    this.router.navigate(['']);
  }
  
  onForward() { 
    this.router.navigate(['newsletters']);
  }
  
  get diagnostic() { return JSON.stringify(this.business,null," "); }

}
