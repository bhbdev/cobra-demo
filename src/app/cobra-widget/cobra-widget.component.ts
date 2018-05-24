import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../business';

@Component({
  selector: 'app-cobra-widget',
  templateUrl: './cobra-widget.component.html',
  styleUrls: ['./cobra-widget.component.less']
})
export class CobraWidgetComponent implements OnInit {

  @Input() business: Business;

  constructor() { }

  ngOnInit() {
  }

}
