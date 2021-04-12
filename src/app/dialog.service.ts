import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ProductComponent  } from './product/product.component'  
import { Router, ActivatedRoute } from '@angular/router';
import { AccountOpenComponent } from './account-open/account-open.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  openTableDialog() {
    const dialogRef = this.dialog.open(MaintenanceComponent, {
      width: 'auto'
    });
    this.router.events
 .subscribe(() => {
   dialogRef.close();
 });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openNewDialog() {
    const dialogRef = this.dialog.open(AccountOpenComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    this.router.events
    .subscribe(() => {
      dialogRef.close();
    });
  }
  openAccountDialog() {
    const dialogRef = this.dialog.open(MaintenanceComponent, {
      width: 'auto'
    });
    this.router.events
 .subscribe(() => {
   dialogRef.close();
 });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openFormDialog() {
    const dialogRef = this.dialog.open(ProductComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  closeDialog(){
    this.dialog.closeAll();
  }
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }
}
