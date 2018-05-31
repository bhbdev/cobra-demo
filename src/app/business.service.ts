import { Injectable } from '@angular/core';
//import { LocalStorage } from '@ngx-pwa/local-storage';
import { Business,Newsletters } from './business';

@Injectable()
export class BusinessService {


  //constructor(private localStorage: LocalStorage) {}
  constructor() {}
  
  getNewsletter(_id:number) {
    return Newsletters.filter(newsletter => newsletter.id === _id);
  }
  
  hasBusiness() {
    return typeof localStorage.getItem('business') != 'undefined';
  }
  
  newBusiness() {
    let business = new Business('','',null,null,false);
    this.saveBusiness(business);
    return this.getBusiness();
  }
  
  getBusiness() {
    return JSON.parse(localStorage.getItem('business'));
  }
  
  saveBusiness(business:Business) {
     localStorage.setItem('business', JSON.stringify(business))
  }
  
  resetBusiness() {
    localStorage.clear();
    this.newBusiness();
  }
  
  
  
}
