import { Component, OnInit } from "@angular/core";
import { CustomersService } from "../../service/customers.service";
import { Customer } from "../../../../model/Customer";
@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  firstname: string;
  lastname: string;
  constructor(private cService: CustomersService) {
    this.cService.getAllCustomers().subscribe(customers => {
this.customers = customers;      
    });
  }

  ngOnInit() {}

  addCustomer(event) {
    event.preventDefault(); ///prevent submitting
    let newCustomer = {
      firstname: this.firstname,
      lastname: this.lastname,
      isProcessClear: false
    };
    this.customers.push;
  }
}
