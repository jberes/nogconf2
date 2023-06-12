import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  public groupVisible = false;
  public northwindOrders: any = null;
  public northwindCustomers: any = null;
  public northwindEmployees: any = null;
  public northwindSuppliers: any = null;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('OrdersType').subscribe(data => this.northwindOrders = data);
    this.northwindService.getData('CustomersType').subscribe(data => this.northwindCustomers = data);
    this.northwindService.getData('EmployeesType').subscribe(data => this.northwindEmployees = data);
    this.northwindService.getData('SuppliersType').subscribe(data => this.northwindSuppliers = data);
  }
}
