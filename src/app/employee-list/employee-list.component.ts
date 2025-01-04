import { Component, OnInit } from '@angular/core';
import { ProjectEmployee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
employees : ProjectEmployee[] = [];
isLoading = true;

constructor (private employeeService : EmployeeService) {}

ngOnInit(): void {
  this.fetchEmployees()
}

fetchEmployees(): void {
this.employeeService.getAllEmployees().subscribe((data) => {
  console.log('Check here', data)
  this.employees = data;
  this.isLoading = false
}, 

(error) => {
  console.log('Error fetching employees', error)
  this.isLoading = false;
})
}

deleteEmployee(id: number) : void {
  if(confirm('Are you sure you wanna delete this employee?')) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      alert('Employee deleted Successfully')
      this.fetchEmployees()
    },(error) => {
      console.log('Error Deleting Employee', error)
    })
  } 
}

editEmployee(employee: ProjectEmployee) : void {
  alert(`Navigate to edit form for ${employee.emProjectId}`)
}
}
