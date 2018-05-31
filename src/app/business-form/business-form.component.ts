import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Business, Newsletters } from '../business';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.less']
})

export class BusinessFormComponent implements OnInit, OnDestroy {

  business: Business;
  navSubscription;
  submitted = false;
  newsletters = Newsletters; //'bibleverses','recipes','travel','politics'
 
  
  constructor(private router: Router, private _data: BusinessService) { 
    this.business = this._data.getBusiness();
    
    this.navSubscription = this.router.events.subscribe((evt:any) => {  
      if (evt instanceof NavigationEnd) {
        if (!this._data.hasBusiness())
          this.initializeBusiness();
      }
    });
    
  }

  initializeBusiness() {
    this.business = this._data.newBusiness();
  }

  onForward() { 
    this.submitted = true; 
    this._data.saveBusiness(this.business);
    this.router.navigate(['widgets']);
  }
  
  
  get diagnostic() { return JSON.stringify(this.business,null," "); }

  ngOnInit() {
    if (this._data.hasBusiness()) {
      this.business = this._data.getBusiness();
    } else {
      this.business = this._data.newBusiness();
    }
  }

  ngOnDestroy() {
    if (this.navSubscription) {
      this.navSubscription.unsubscribe();
    }
  }

}
