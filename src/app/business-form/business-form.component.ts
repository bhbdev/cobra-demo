import { Component } from '@angular/core';
import { Business } from '../business';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.less']
})
export class BusinessFormComponent {

//  Business = {
//    id: 1,
//    name: 'Brand Name',
//    logo: 'http://image.url',
//    use_default_logo: false,
//    optins_per_day: null,
//    newsletter: null
//  };

  newsletters = ['bibleverses','recipes','travel','politics'];

  business = new Business(1, '', '', false, null, null);
  
  submitted = false;
  

  onForward() { this.submitted = true; }
  
  
  get diagnostic() { return JSON.stringify(this.business); }

}
