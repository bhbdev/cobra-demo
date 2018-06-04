import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from '../business.service';
import { EzineComponent } from '../ezine/ezine.component';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.less']
})
export class NewslettersComponent implements OnInit {

  public business;
  public newsletter;
  public newsletters;
  
  constructor(private router: Router, private _data: BusinessService) { }

  ngOnInit() {
    
    this.business = this._data.getBusiness();
    if (!this.business.newsletter) {
      this.router.navigate(['']); //go home
      return;
    }  
    this.newsletter = this._data.getNewsletter(this.business.newsletter);
    this.newsletters = this._data.getNewsletters();
  }
  
  setEzine() {
    this._data.saveBusiness(this.business);
    this.business = this._data.getBusiness();
    this.newsletter = this._data.getNewsletter(this.business.newsletter)
  }
  
  onBackward() {
    this.router.navigate(['widgets']);
  }
  
  onForward() { 
    this.router.navigate(['']); //TODO determine final page?
  }

  get diagnostic() { 
    this.business.ezine = this.newsletter;
    return JSON.stringify(this.business,null," "); 
  
  }

}
