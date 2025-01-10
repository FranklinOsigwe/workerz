export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  salary: number;
}

export interface ProjectEmployee {
  emProjectId: number;
  projectId: number;
  assignedDate: string;
  role: string;
  empId: number;
  isActive: boolean;
}

export interface IRole {
  userId: number;
  username: string;
  fullName: string;
  role: string;
  createdDate: number;
  password: string;
  projectName: string;
  refreshToken: any;
  refreshTokenExpiryTime: any;
}

export interface IDepartmentData {
  message: string;
  result: boolean;
  data: any;
}
export interface IDepartment {
  childDeptId: number;
  parentDeptId: number;
  departmentName: string;
}

export class Client {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  employeeStrength: number;
  gstNo: string;
  contactNo: string;
  regNo: string;

  constructor(){
    this.clientId = 0;
    this.employeeStrength=0;
    this.address = '';
    this.city ='';
    this.companyName='';
    this.contactNo = '';
    this.state = '';
    this.regNo = '';
    this.gstNo= '';
    this.pincode='';
    this.contactPersonName=''
  }
}

export class Login {
    EmailId: string;
    Password: string
 constructor(){
   this.EmailId = '';
   this.Password = '';
 }  
}

// export class EmployeeTest {
//   clientProjectId:        number;
//   projectName:            string;
//   startDate:              Date;
//   expectedEndDate:        Date;
//   leadByEmpId:            any;
//   completedDate:          string;
//   contactPerson:          string;
//   contactPersonContactNo: string;
//   totalEmpWorking:        number;
//   projectCost:            number;
//   projectDetails:         string;
//   contactPersonEmailId:   string;
//   clientId:               number;

//   constructor(){
//     this.clientProjectId = 0;
//     this.projectName = '';
//     this.startDate = new Date();
//     this.expectedEndDate = new Date();
//     this.leadByEmpId = ''
//     this.completedDate = '';
//     this.contactPerson = '';
//     this.contactPersonContactNo = '';
//     this.totalEmpWorking = 0;
//     this.projectCost = 0;
//     this.projectDetails = '';
//     this.contactPersonEmailId = '';
//     this.clientId = 0;
//   }
// }

export interface Employee {
  empName: string;
  empId: string;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  role:string;
}

export  interface ClientProject {
  empName: string;
  emId: string;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  projectName: string;
  startDate: string;
  expectedEndDate: string;
  clientName: string;
  clientProjectId: string;
}
