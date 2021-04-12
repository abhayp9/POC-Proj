import { Component, OnInit } from '@angular/core';
import {DialogService} from '../dialog.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {TableserviceService } from '../tableservice.service';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

import {
  FormControl,
  FormGroup,
} from '@angular/forms';
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

interface Family {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ProductComponent implements OnInit {
result;
  form: FormGroup = new FormGroup({
    fcode: new FormControl(),
    ffam: new FormControl(),
    fname: new FormControl(),
    subc: new FormControl(),
    date: new FormControl(moment())
    
  });
  
  families: Family[] = [
    {value: 'Account Opening', viewValue: 'Account Opening'},
    {value: 'Account Titling', viewValue: 'Account Titling'},
    {value: 'Channel Access', viewValue: 'Channel Access'},
    {value: 'Communications', viewValue: 'Communications'},
  ];
  constructor(private table: TableserviceService, private dialog: DialogService) { }

  ngOnInit(): void {
  }
  submit(){
  this.table.adddata(this.form.value);
  this.dialog.closeDialog();
  }
  close(){
    this.dialog.closeDialog();
  }
}
