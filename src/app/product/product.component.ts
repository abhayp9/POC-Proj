import { Component, OnInit } from '@angular/core';
interface Family {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  families: Family[] = [
    {value: 'accountOpen', viewValue: 'Account Opening'},
    {value: 'accountTitle', viewValue: 'Account Titling'},
    {value: 'channelAcces', viewValue: 'Channel Access'},
    {value: 'comms', viewValue: 'Communications'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
