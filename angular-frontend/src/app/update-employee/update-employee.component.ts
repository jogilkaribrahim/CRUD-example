import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id : number;
  employee: Employee = new Employee();
  constructor(private employeeService : EmployeeService, private Route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.Route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    }, error => console.log(error));
  }
  onSubmit(){
   this.employeeService.updateEmployeeById(this.id , this.employee). subscribe(data => { this.gotoEmployeeList()},
   error => console.log(error)) 
  } 
  gotoEmployeeList(){
    this.router.navigate(['/employees']);
      }
}
