import { Component, EmbeddedViewRef, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { IDepartment, IDepartmentData } from '../../models/employee.model';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
masterService = inject(EmployeeService)
departmentList: IDepartment[] = [];
isLoading:boolean = true;
  ngOnInit(): void {
    this.masterService.getAllDepartments().subscribe((res: IDepartmentData) => {
      this.departmentList = res.data;
      this.isLoading = false

    }, error => {
      alert('Something went wrong')
      this.isLoading = false;
    })
  }

}
