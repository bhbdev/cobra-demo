import { Injectable } from '@angular/core';
import { Business } from './business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  public business: Business;
  constructor() { }
}
