import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
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
 
  
  constructor(private router: Router, private route: ActivatedRoute, private _data: BusinessService) { 
    this.initializeBusiness();
    this.navSubscription = this.router.events.subscribe((evt:any) => {
      if (evt instanceof NavigationEnd) {
        if (!this._data.hasBusiness())
          this.initializeBusiness();
          this.business.ezine = new Newsletter(null,'',null);
      }
    });
  }
  
  ngOnInit() {
    this.getBusiness();
    
  }

  ngOnDestroy() {
    if (this.navSubscription) {
      this.navSubscription.unsubscribe();
    }
  }
  
  getBusiness() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (!id)
      this.initializeBusiness();
    else
      this._data.getLead(parseInt(id.toString().replace(/^.*?-/,''))).subscribe(business => {
        this.business = business;
        if (!this.business)
        this.business = this._data.newBusiness();
      
        this.newsletter = this._data.getNewsletter(this.business.newsletter);
        this.newsletters = this._data.getNewsletters();

        if (!this.newsletter) {
          this.business.ezine = new Newsletter(null,'',null);
        }
      
      });
  }

  initializeBusiness() {
    this.business = !this._data.hasBusiness()? this._data.newBusiness() : this._data.getBusiness();
  }

  setEzine() {
    this.newsletter = this._data.getNewsletter(this.business.newsletter)
    this.business.ezine = this.newsletter;
  }

  onForward() { 
    this.submitted = true; 
    this._data.saveBusiness(this.business);
    this.router.navigate(['widgets']);
  }
  
  


  get diagnostic() { 
    return JSON.stringify(this.business,null," "); 
  }

}
