import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TableserviceService } from '../tableservice.service';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ProductComponent  } from '../product/product.component'  


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  down = false;
  down2 = false;
  data;
  fcode;
  displayedColumns: string[] = ['fcode', 'ffam', 'fname', 'subc', 'date'];
  dataSource = this.table.features;

  form: FormGroup = new FormGroup({
    rpg: new FormControl('Cozi Elevate Account Package'),
    name: new FormControl('GVC001'),
    sname: new FormControl('CEA'),
    edate: new FormControl('3/10/2020'),
    hier: new FormControl('Unassigned')
    
  });
  
  constructor(private dialog: MatDialog,  private table: TableserviceService) { 
    this.getData();
  }
  addinfo: FormGroup = new FormGroup({
    fcode: new FormControl(),
    fname: new FormControl('Account Opening'),
    active: new FormControl('YES'),
    fcode2: new FormControl('2'),
    edate: new FormControl(),
    ptype: new FormControl('Blue'),
    ffcode: new FormControl('02'),
    contype: new FormControl('C'),
    ffam: new FormControl('001'),
    desc: new FormControl('COZI ELEVATE(SM) ACCOUNT PACKAGE'),
    modify: new FormControl('Jane Doe, 3/31/2021, 12:05 PM'),
    create: new FormControl('Jane Doe, 3/31/2021, 12:05 PM')



    
  });

  ngOnInit(): void {
    this.addinfo.disable();
    
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  getData(){
    
      this.data = this.dataSource[0];
      this.addinfo.controls['fcode'].patchValue(this.data.fcode);
      this.addinfo.controls['fname'].patchValue(this.data.fname);
      this.addinfo.controls['edate'].patchValue(this.data.date);

    }
    
  open(){
    this.down = true;
  }
  closed(){
    this.down = false;
  }
  open2(){
    this.down2 = true;
  }
  closed2(){
    this.down2 = false;
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
