import { Injectable } from '@angular/core';
//import { LocalStorage } from '@ngx-pwa/local-storage';
import { Business, Newsletters } from './business';

@Injectable()
export class BusinessService {


  //constructor(private localStorage: LocalStorage) {}
  constructor() {}
  
  getNewsletters() {
    return Newsletters;
  }
  
  getNewsletter(_id:number) {
    return Newsletters.find(x => x.id == _id );
  }
  
  hasBusiness() {
    return localStorage.getItem('business') !== null;
  }
  
  newBusiness() {
    let business = new Business('','',null,null,null,false);
    this.saveBusiness(business);
    return this.getBusiness();
  }
  
  getBusiness() {
    return JSON.parse(localStorage.getItem('business'));
  }
  
  saveBusiness(business:Business) {
     business.ezine = this.getNewsletter(business.newsletter);
     localStorage.setItem('business', JSON.stringify(business))
  }
  
  resetBusiness() {
    localStorage.clear();
  }
  
  
  
}
