import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee, ProjectEmployee } from '../models/employee.model';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit{
employee: ProjectEmployee = {
// employee: Employee = {
  emProjectId: 0,
  projectId:0,
  empId: 0,
  assignedDate: new Date().toISOString(),
  role:'',
  isActive: true,
};
isEditMode = false;


constructor(private employeeService: EmployeeService, private router: Router) {}

ngOnInit(): void {
  //check if this is the edit mode(load data if necessary, using route params)
}

submitForm(): void {
  if(this.isEditMode) {
    this.employeeService.updateEmployee(this.employee).subscribe(() => {
      alert('Employee updated Successfully');
      this.router.navigate(['/employees'])
    }, 
  (error) => {
    console.log('Error updating employee', error)
  }
  )
  } else {
    this.employeeService.createEmployee(this.employee).subscribe(() => {
      alert('Employee added Successfully')
      this.router.navigate(['/employees'])
    },(error) => {
      console.error('Error Adding Employee', error)
    })
  }
}
}
