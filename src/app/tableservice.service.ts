import { Injectable } from '@angular/core';
export interface Features {
  fcode: string;
  ffam: string;
  fname: string;
  subc: string;
  date: string;
}
let features: Features[] = [
  {fcode: '001', ffam: 'Account Opening', fname: 'Branch Account Opening', subc:'Open', date: '3/12/2020'},
  {fcode: '002', ffam: 'Account Titling', fname: 'Featuer 2', subc:'Close', date: '1/15/2021'},
  {fcode: '003', ffam: 'Channel Access', fname: 'Feature 3', subc:'Channel', date: '2/21/2021'}
];

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {  
  items = localStorage.setItem("allitems", JSON.stringify(features));
  currentitems = JSON.parse(localStorage.getItem("allitems"));
  newitems;
  features = features;
  constructor(){
  };

  
  adddata(idata){
    let entries = [idata];
    console.log(entries)
    let entry = localStorage.setItem("entry", JSON.stringify(entries));
    let allitems = JSON.parse(localStorage.getItem("allitems"));
    allitems.push(idata);
    console.log(allitems);
    localStorage.setItem("allitems", JSON.stringify(allitems));
    this.currentitems = JSON.parse(localStorage.getItem("allitems"));
  }
  
  getData(){

  }
}
