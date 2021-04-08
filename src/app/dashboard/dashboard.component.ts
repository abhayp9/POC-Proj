import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MaintenanceComponent } from '../maintenance/maintenance.component';
import { ProductComponent  } from '../product/product.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
 
  openTableDialog() {
    const dialogRef = this.dialog.open(MaintenanceComponent, {
      width: 'auto'
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
  constructor(public dialog: MatDialog) {}
}
