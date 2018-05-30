import { Injectable } from '@angular/core';
//import { LocalStorage } from '@ngx-pwa/local-storage';
import { Business } from './business';

@Injectable()
export class BusinessService {


  //constructor(private localStorage: LocalStorage) {}
  constructor() {}
  
  
  hasBusiness() {
    return typeof localStorage.getItem('business') != 'undefined';
  }
  
  newBusiness() {
    let business = new Business('','',null,null,false);
    this.saveBusiness(business);
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
