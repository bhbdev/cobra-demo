import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-revshare-contd',
  template: `
  <div class="container-fluid">
    <div class="row">
      <div class="col content single-col text-center">
        <img src="assets/img/revshare-contd.png" alt="" class="img-fluid" />
        <br>
        <br>
        <div class="form-buttons">
        <button type="button" (click)="onBackward()" class="btn btn-default btn-back"><i class="fa fa-angle-left"></i> Backward</button>
        <button type="submit" (click)="onForward()" class="btn btn-primary btn-forward">Forward <i class="fa fa-angle-right"></i></button>
        </div>

<br><br><br><hr>
<div class="text-left">Log:
<pre style="font-size: 11px">{{diagnostic}}</pre>
</div>

      </div>
    </div>
  </div>         
    
  `,
  styles: []
})
export class RevshareContdComponent implements OnInit {

  public business;

  constructor(private router: Router, private _data: BusinessService) {   
  }

  ngOnInit() {
    
    this.business = this._data.getBusiness();
    if (!this.business.newsletter) {
      this.router.navigate(['']); //go home
      return;
    }
    
  }
  
  onBackward() {
    this.router.navigate(['revshare']);
  }
  
  onForward() { 
    this.router.navigate(['contact']); 
  }
  
  get diagnostic() { 
    return JSON.stringify(this.business,null," "); 
  }

}
