import { Component , inject, OnInit} from '@angular/core';
import { Client } from '../../models/employee.model';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from "../../reusableComponents/alert/alert.component";
import { MyButtonComponent } from '../../my-button/my-button.component';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, AlertComponent,MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj : Client = new Client();
  clientList : Client[] = []

  clientService = inject(EmployeeService)

ngOnInit(): void {
  this.loadClient()
  // this.userList$ = this.clientService.getAllUser()
}

loadClient() {
this.clientService.getAllClient().subscribe((res:any) => {
this.clientList = res.data;
})
}
// onSaveClient() {
//   this.clientService.addUpdate(this.clientObj).subscribe({
//     next: (res: any) => {
//       if (res.result) {
//         console.log('Client created successfully:', res);
//         alert("Client Created Successfully");
//         this.loadClient(); // Reload the client list
//         this.clientObj = new Client(); // Reset the form
//       } else {
//         alert(res.message || "Failed to create client.");
//       }
//     },
//     error: (err) => {
//       console.error("Error while creating client:", err);
//       alert("An error occurred while saving the client.");
//     }
//   });
// }

userList$ : Observable<any> = new Observable<any>;


onDelete(id: number) {
  const isDelete = confirm("Are you sure you want to delete?");
  if (isDelete) {
    this.clientService.deleteClientById(id).subscribe({
      next: (res: any) => {
        if (res.result) {
          alert("Client has been deleted successfully");
          this.loadClient(); // Reload the client list
        } else {
          alert(res.message || "Failed to delete client.");
        }
      },
      error: (err) => {
        console.error("Error while deleting client:", err);
        alert("An error occurred while deleting the client.");
      }
    });
  }
}

  onSaveClient(data: string) {
    this.clientService.addUpdate(this.clientObj).subscribe((res: any) => {
      if(res.result) {
        alert("Client Created Success")
        this.loadClient()
        this.clientObj = new Client()
      } else {
        alert(res.message)
      }
    })
  }

  onEdit(data: Client) {
    this.clientObj = data;
  }


  resetForm() {
    this.clientObj = new Client();
  }
  // onDelete(id: number) {
  //  const isDelete = confirm("Are you sure you wanna delete??")
  //  if(isDelete) {
  //   this.clientService.deleteClientById(id).subscribe((res: any) => {
  //     if(res.result) {
  //       alert("Client has been deleted Successfully");
  //       this.loadClient();
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  //  }
  // }

 
}
