import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Business } from '../business';
import { BusinessService } from '../business.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  public business;

  constructor(private router: Router, private _data: BusinessService) { }

  ngOnInit() {
    this.business = this._data.getBusiness();
    if (!this.business.newsletter) {
      this.router.navigate(['']); //go home
      return;
    }
    
  }
  
  onBackward() {
    this.router.navigate(['revshare-contd']);
  }
  
  onForward() { 
    this.router.navigate(['']); 
  }
  
  get diagnostic() { 
    return JSON.stringify(this.business,null," "); 
  }
  
  
}
