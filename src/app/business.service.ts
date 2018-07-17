import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//import { LocalStorage } from '@ngx-pwa/local-storage';
import { Business, Newsletters } from './business';




@Injectable()
export class BusinessService {
  
  private businessUrl = 'https://orion.arcamax.com:2001/syspages/cobralead'; // url to JSNews api

  constructor(
    private http:HttpClient
  ) {}
  
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
    let business = new Business(0,'','',null,null,null,false,'');
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
  
  
  /** GET business by id. Will try localStorage if id not found */
  getLead(id: number): Observable<Business> {
    return this.http.get<Business>(`${this.businessUrl}/?cmd=get&clid=${id}`).pipe(
      catchError(this.handleError<Business>(`getLead id=${id}`))
    );
  }
  
  
  saveLead(business: Business): Observable<Business> { 
    
  //   const headers = new HttpHeaders({
//         'Content-Type': 'application/x-www-form-urlencoded'
         //,'Authorization': 'my-auth-token'   //< TODO implement auth security
//     });

    const params = new HttpParams()
      .set('cmd', 'save')
      .set('jsondata', JSON.stringify(business));

    const options = {
//      headers,
      params
    }
    
    return this.http.post<Business>(this.businessUrl, null, options)
      .pipe(
        catchError(this.handleError('saveLead', business))
      );
  }
  
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      
      //this.log(`${operation} failed: ${error.message}`);
      
      return of(result as T);
      
    };    
  }
  
}
