import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
export interface PeriodicElement {
  name: string;
  rpgcode: string;
  rmsseg: string;
  edate: string;
  ldate: string;
  position: number;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Cozi Elevate Account Package', rpgcode: 'GVC001', rmsseg: 'Blue', edate:'3/10/2020', ldate: '3/15/2020'},
  {position: 2, name: 'Cozi Gold Account Package', rpgcode: 'GVC013', rmsseg: 'Gold', edate:'4/10/2020', ldate: '4/23/2020'},
  {position: 3, name: 'Cozi Platinum Account Package', rpgcode: 'GVC021', rmsseg: 'Silver', edate:'2/10/2020', ldate: '1/20/2020'},
];

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}
  displayedColumns: string[] = ['position', 'name', 'rpgcode', 'rmsseg', 'edate', 'ldate'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }
  nextPage() {
    this.router.navigate(['value']);
    
  }
  
}
