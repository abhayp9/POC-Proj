import { Component, OnInit } from '@angular/core';

import {TableserviceService } from '../tableservice.service';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

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
result;
  form: FormGroup = new FormGroup({
    fcode: new FormControl(),
    ffam: new FormControl(),
    fname: new FormControl(),
    subc: new FormControl(),
    date: new FormControl()
    
  });
  
  families: Family[] = [
    {value: 'accountOpen', viewValue: 'Account Opening'},
    {value: 'accountTitle', viewValue: 'Account Titling'},
    {value: 'channelAcces', viewValue: 'Channel Access'},
    {value: 'comms', viewValue: 'Communications'},
  ];
  constructor(private table: TableserviceService) { }

  ngOnInit(): void {
  }
  submit(){
  this.table.adddata(this.form.value);
  }

}
