import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../business';

@Component({
  selector: 'ezine',
  templateUrl: './ezine.component.html',
  styleUrls: ['./ezine.component.less']
})
export class EzineComponent implements OnInit {

  @Input() business: Business;
  @Input('id') templateId: string;

  ngOnInit() {}

}
