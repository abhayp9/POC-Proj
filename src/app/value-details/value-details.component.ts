import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TableserviceService } from '../tableservice.service';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ProductComponent  } from '../product/product.component'  
@Component({
  selector: 'app-value-details',
  templateUrl: './value-details.component.html',
  styleUrls: ['./value-details.component.scss']
})
export class ValueDetailsComponent implements OnInit {
  displayedColumns: string[] = ['fcode', 'ffam', 'fname', 'subc', 'date'];
  dataSource = this.table.data;

  form: FormGroup = new FormGroup({
    rpg: new FormControl('Cozi Elevate Account Package'),
    name: new FormControl('GVC001'),
    sname: new FormControl('CEA'),
    edate: new FormControl('3/10/2020'),
    hier: new FormControl('Unassigned')
    
  });
  addinfo: FormGroup = new FormGroup({
    vcode: new FormControl('001'),
    code: new FormControl(''),
    rectype: new FormControl(''),
    groupcode: new FormControl('2'),
    type: new FormControl(''),
    tps: new FormControl('001'),
    rms: new FormControl('Blue'),
    slc: new FormControl('02'),
    bp: new FormControl('C'),
    lc: new FormControl('001'),
    desc: new FormControl('COZI ELEVATE(SM) ACCOUNT PACKAGE'),
    modify: new FormControl('Jane Doe, 3/31/2021, 12:05 PM'),
    create: new FormControl('Jane Doe, 3/31/2021, 12:05 PM')



    
  });
  constructor(private dialog: MatDialog,  private table: TableserviceService) { }

  ngOnInit(): void {
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  openFormDialog() {
    const dialogRef = this.dialog.open(ProductComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
