import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from '../business.service';


@Component({
  selector: 'app-revshare',
  templateUrl: './revshare.component.html',
  styleUrls: ['./revshare.component.less']
})
export class RevShareComponent implements OnInit {

  public business;
  public months;
  public leadsPerMonth;
  public confirmRate;
  public perUserAvg;
  public revAvg;
  public curRevAvg;
  
  constructor(private router: Router, private _data: BusinessService) {   
  }

  ngOnInit() {

    
    
    this.business = this._data.getBusiness();
    if (!this.business.newsletter) {
      this.router.navigate(['']); //go home
      return;
    }
    
    this.months = Array.from(Array(12),(x,i)=>i+1);
    this.leadsPerMonth = this.business.optins_per_day * 30;
    this.confirmRate = 0.12;
    this.perUserAvg = 0.42;
    this.revAvg = 0.85;
      
  }
  
  setEzine() {
    this._data.saveBusiness(this.business);
    this.business = this._data.getBusiness();
  }
  
  onBackward() {
    this.router.navigate(['newsletters']);
  }
  
  onForward() { 
    this.router.navigate(['']); //TODO determine final page?
  }

  get diagnostic() { 
    return JSON.stringify(this.business,null," "); 
  
  }

}
