import { Injectable } from '@angular/core';
export interface Features {
  fcode: string;
  ffam: string;
  fname: string;
  subc: string;
  date: string;
}

let features: Features[] = [
  {fcode: '001', ffam: 'Account Opening', fname: 'Test name', subc:'test', date: '3/15/2020'},
  {fcode: '001', ffam: 'Account Opening', fname: 'Test name', subc:'test', date: '3/15/2020'},
  {fcode: '001', ffam: 'Account Opening', fname: 'Test name', subc:'test', date: '3/15/2020'}
];
@Injectable({
  providedIn: 'root'
})
export class TableserviceService {
  data = features;
  adddata(idata){
    console.log(idata);
    features.push(idata);
  }
}
