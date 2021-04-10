import { Component, OnInit } from '@angular/core';
import {TableserviceService } from '../tableservice.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-account-open',
  templateUrl: './account-open.component.html',
  styleUrls: ['./account-open.component.scss']
})
export class AccountOpenComponent implements OnInit {

  constructor( private table: TableserviceService, private router: Router) { }
  displayedColumns: string[] = ['position', 'fcode', 'ffam', 'fname', 'subc', 'date'];
  dataSource = this.table.data;
  ngOnInit(): void {
  }
  nextPage() {
    this.router.navigate(['accountm']);
    
  }
}
