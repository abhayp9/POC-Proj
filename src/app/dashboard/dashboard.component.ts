import { Component } from '@angular/core';
import { DialogService } from '../dialog.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  openTableDialog() {
    this.dialog.openTableDialog();
  };
  openNewDialog() {
    this.dialog.openNewDialog();
  };
  openAccountDialog() {
    this.dialog.openAccountDialog();
  };
  openFormDialog() {
    this.dialog.openFormDialog();
  };
  
  constructor(private dialog: DialogService) {}
}
