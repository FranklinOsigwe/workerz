import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Client, ClientProject, Employee, EmployeeTest } from '../../models/employee.model';
import { AsyncPipe, DatePipe } from '@angular/common';
import { AlertComponent } from "../../reusableComponents/alert/alert.component";

@Component({
  selector: 'app-employee',
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

projectForm: FormGroup = new FormGroup({
clientProjectId: new FormControl(0),
projectName: new FormControl('', [Validators.required, Validators.minLength(4)]),
startDate: new FormControl(''),
expectedEndDate: new FormControl(''),
leadByEmId: new FormControl(''),
completedDate: new FormControl(''),
contactPerson: new FormControl(''),
contactPersonContactNo: new FormControl(''), 
totalEmpWorking: new FormControl(''),
projectCost: new FormControl(''),
projectDetails: new FormControl(''),
contactPersonEmailId: new FormControl(''),
clientId: new FormControl(''),
})

// clientSrv = inject(EmployeeService)

employeeList: Employee[] = []
clientList: Client[] = []
projectList = signal<ClientProject[]>([]);
EmployeeObj: EmployeeTest = new EmployeeTest();
employeeSrv = inject(EmployeeService)

ngOnInit(): void {
  this.getAllClient();
  this.getAllEmployee();
  this.getAllClientProject();
}

getAllEmployee() {
  this.employeeSrv.getAllEmployee().subscribe((res: any) => {
    this.employeeList= res.data;
  })
}

getAllClientProject() {
  this.employeeSrv.getAllClientProjects().subscribe((res: any) => {
    this.projectList.set(res.data);
  })
}

getAllClient() {
  this.employeeSrv.getAllClient().subscribe((res: any) => {
    this.clientList= res.data;
  })
}

onSaveEmployee(){
  const formValue = this.projectForm.value
  // this.employeeSrv.addClientProjectUpdate(this.EmployeeObj).subscribe((res: any) => {
  this.employeeSrv.addClientProjectUpdate(formValue).subscribe((res: any) => {
    if(res.result){
      alert('Successfully created')
      this.getAllClient();
      this.EmployeeObj = new EmployeeTest();
    } else {
      alert(res.message)
    }
  })}
// onSaveProject(){
//  const formValue = this.projectForm.value
//  this.clientSrv.addClientProjectUpdate(formValue).subscribe((res: any ) => {
//   if(res.result) {
//     alert('Successfully created')
//   }else {
//     alert(res.message)
//   }
//  })
// }

}
