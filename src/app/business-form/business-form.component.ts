import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Business } from '../business';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.less']
})

export class BusinessFormComponent {

  newsletters = ['bibleverses','recipes','travel','politics'];

  business = new Business(1, '', '', null, null, false);
  
  submitted = false;
  
  constructor(private router: Router, private _data: BusinessService) { }

  onForward() { 
    this.submitted = true; 
    this._data.business = this.business;
    this.router.navigate(['widgets']);
  }
  
  get diagnostic() { return JSON.stringify(this.business,null," "); }


}
