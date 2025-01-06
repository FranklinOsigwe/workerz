import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client, EmployeeTest, IDepartment, IDepartmentData, ProjectEmployee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
private baseUrl = 'https://freeapi.miniprojectideas.com/api/ClientStrive';
// private baseUrl = 'https://projectapi.gerasim.in/api/EmployeeManagement';

  constructor(private http: HttpClient) { }

  //fetch all employees
  getAllEmployees() : Observable<ProjectEmployee[]> {
    return this.http.get<ProjectEmployee[]>(`${this.baseUrl}/GetAllEmployees`)
  }

  //Create a new Employee
  createEmployee(employee: ProjectEmployee) : Observable<any> {
 return this.http.post(`${this.baseUrl}/CreateProjectEmployee`, employee)
  }
//update
  updateEmployee(employee: ProjectEmployee ) : Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateEmployee`, employee)
  }

  //delete
  deleteEmployee(id: number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeleteEmployee/${id}`)
  }

  // ===============================================>>
  getAllDepartments(): Observable<IDepartmentData> {
    return this.http.get<IDepartmentData>('https://projectapi.gerasim.in/api/Complaint/GetAllChildDepartment')  
  }

  getAllClient():Observable<IDepartmentData> {
    return this.http.get<IDepartmentData>(`${this.baseUrl}/GetAllClients`)
  }

  addUpdate(obj: Client): Observable<IDepartmentData> {
    return this.http.post<IDepartmentData>(`${this.baseUrl}/AddUpdateClient`, obj);
  }

  // addEmployeeUpdate(obj: EmployeeTest): Observable<IDepartmentData> {
  //   return this.http.post<IDepartmentData>(`${this.baseUrl}/AddUpdateClientProject`, obj);
  // }

  

 deleteClientById(id: number):Observable<IDepartmentData> {
    // return this.http.delete<IDepartmentData>(`${this.baseUrl}/DeleteClientByClientId?clientId/${id}`)
    return this.http.delete<IDepartmentData>(`${this.baseUrl}/DeleteClientByClientId?clientId=${id}`)

  }
  // =========================================
  getAllEmployee():Observable<IDepartmentData> {
    return this.http.get<IDepartmentData>(`${this.baseUrl}/GetAllEmployee`)
  }

  getAllClientProjects():Observable<IDepartmentData> {
    return this.http.get<IDepartmentData>(`${this.baseUrl}/GetAllClientProjects`)
  }

  addClientProjectUpdate(obj:Client): Observable<IDepartment> {
    return this.http.post<IDepartment>(`${this.baseUrl}/AddUpdateClientProject`, obj)
  }

  getAllUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}



