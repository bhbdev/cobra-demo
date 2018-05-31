import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Business, Newsletter, Newsletters } from '../business';
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
  newsletter;
  newsletters = Newsletters; //'bibleverses','recipes','travel','politics'
 
  
  constructor(private router: Router, private _data: BusinessService) { 
    this.business = this._data.getBusiness();
    
    this.navSubscription = this.router.events.subscribe((evt:any) => {  
      if (evt instanceof NavigationEnd) {
        if (!this._data.hasBusiness())
          this.initializeBusiness();
          this.business.ezine = new Newsletter(null,'',null);
      }
    });
    
  }

  initializeBusiness() {
    this.business = this._data.newBusiness();
  }

  setEzine() {
   // this._data.saveBusiness(this.business);
    //this.business = this._data.getBusiness();
    this.newsletter = this._data.getNewsletter(this.business.newsletter)
    this.business.ezine = this.newsletter;
  }

  onForward() { 
    this.submitted = true; 
    this._data.saveBusiness(this.business);
    this.router.navigate(['widgets']);
  }
  
  ngOnInit() {
    if (this._data.hasBusiness()) {
      this.business = this._data.getBusiness();
    } else {
      this.business = this._data.newBusiness();
    }
    this.newsletter = this._data.getNewsletter(this.business.newsletter);
    this.newsletters = this._data.getNewsletters();

    if (!this.newsletter) {
      this.business.ezine = new Newsletter(null,'',null);
    }
  }

  ngOnDestroy() {
    if (this.navSubscription) {
      this.navSubscription.unsubscribe();
    }
  }


  get diagnostic() { 
    return JSON.stringify(this.business,null," "); 
  }

}
