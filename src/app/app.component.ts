import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from './business.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Cobra Demo';
  
  constructor(private router: Router, private _data: BusinessService) {}
  
  onActivate(event) {
    window.scrollTo(0,0);
  }
  
  resetWizard() {
    if (confirm('Are you sure you wish to reset the wizard?')) {
      this._data.resetBusiness();
      this.router.navigate(['']);
    }
  }
}
