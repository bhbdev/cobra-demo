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
  public revMonths;
  public revCurrentMonth;
  public revMonthRevenue;
  public revTotalRevenue;
  public DOISubscribers;
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
    
    this.calculateValues();
  }
  
  calculateValues() {
    this.confirmRate = 0.12;
    this.perUserAvg = 0.42;
    this.revAvg = 0.85;
    this.revTotalRevenue = 0;
    this.months = Array.from(Array(12),(x,i)=>i+1);
    
    this.leadsPerMonth = this.business.optins_per_day * 30;
    this.DOISubscribers = this.leadsPerMonth * this.confirmRate;
    this.revCurrentMonth = (this.leadsPerMonth * this.confirmRate) * this.perUserAvg;   
    this.revMonths = [];
    for (var i=0; i < this.months.length; ++i) 
    {
      this.revMonths[i] = [];
      for (var x=0; x < 12; ++x) {
        if (i==0) {
          this.revMonths[i][x] = this.revCurrentMonth;
        }
        else {
          if (x < i)
            this.revMonths[i][x] = '';
          else
            this.revMonths[i][x] = Math.ceil((this.DOISubscribers * (this.revAvg - (0.05 * i))) * this.perUserAvg);
        }
      }  
    }
    var monthTotals = [];
    for (var i=0; i < this.revMonths.length; ++i) {
      var total = 0;
      for (var x=0; x < this.revMonths.length; ++x) {
        if (x <= i) {
          total += this.revMonths[x][i];
        }
      }
      monthTotals.push(total);
      this.revTotalRevenue += total * .5;
    }
    this.revMonthRevenue = monthTotals;
    
    console.debug(this.revMonths)
  }
  
  setLeads() {
    this._data.saveBusiness(this.business);
    this.business = this._data.getBusiness();
    this.calculateValues();
  }
  
  onBackward() {
    this.router.navigate(['newsletters']);
  }
  
  onForward() { 
    this.router.navigate(['revshare-contd']); 
  }

  get diagnostic() { 
    return JSON.stringify(this.business,null," "); 
  
  }

}
