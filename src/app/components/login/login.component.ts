import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models/employee.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true, // If this component is standalone
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected `styleUrl` to `styleUrls`
})
export class LoginComponent {
  loginObj: Login = {
    EmailId: '', // Correct initialization
    Password: ''
  };

  // constructor(private router: Router) {}

  http = inject(HttpClient)
  router = inject(Router)
  onLogin(): void {
    
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res: any) => {
      if(res.result){
        alert('Login Successful');
        localStorage.setItem('token', res.data.token)
       this.router.navigateByUrl('/home')
      } else{
        alert(res.message)
      }
    })
    // Add your login logic here
    // console.log('Login attempt with', this.loginObj);
    // Example navigation:
    // this.router.navigate(['/dashboard']);
  }
}
