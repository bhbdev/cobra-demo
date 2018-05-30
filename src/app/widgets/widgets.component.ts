import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.less']
})
export class WidgetsComponent implements OnInit {

  public business;
  
  constructor(private _data: BusinessService) { 
    console.log(JSON.stringify(this._data.business,null," "));
  }

  ngOnInit() {
    this.business = this._data.business;
  }
  
  get diagnostic() { return JSON.stringify(this.business,null," "); }

}
