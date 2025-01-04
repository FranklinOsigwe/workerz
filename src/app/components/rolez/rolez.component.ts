import { Component, inject, OnInit } from '@angular/core';
import { AppComponent } from "../../app.component";
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IRole } from '../../models/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rolez',
  imports: [AppComponent, FormsModule,CommonModule],
  templateUrl: './rolez.component.html',
  styleUrl: './rolez.component.css'
})
export class RolezComponent implements OnInit{
  roleList: IRole[] = []
http = inject(HttpClient);
isLoading : boolean = true;

  ngOnInit(): void {
  this.getAllRoles()
  }

  getAllRoles(){
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetAllUsers').subscribe((res: any) => {
      this.roleList = res.data;
      this.isLoading = false
    })
  }

}
