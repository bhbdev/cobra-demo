import { Component, OnInit } from '@angular/core';
import { Business } from '../business';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.less']
})
export class BusinessFormComponent implements OnInit {

  business: Business = {
    id: 1,
    name: 'Brand Name',
    logo: 'http://image.url'
  };

  constructor() { }

  ngOnInit() {
  }

}
