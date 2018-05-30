import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.less']
})
export class NewslettersComponent implements OnInit {

  public business;
  
  constructor(private router: Router, private _data: BusinessService) { }

  ngOnInit() {
    this.business = this._data.getBusiness();
  }
  
  onBackward() {
    this.router.navigate(['widgets']);
  }
  
  onForward() { 
    this.router.navigate(['']); //TODO determine final page?
  }

  get diagnostic() { return JSON.stringify(this.business,null," "); }

}
