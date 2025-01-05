import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    email: '',
    password: ''
  }
  router= inject(Router);

  onLogin(){
    if(this.loginObj.email === 'franko@gmail.com' && this.loginObj.password === '1234'){
      console.log('Login successful');
      this.router.navigateByUrl('home')
      localStorage.setItem('isLoggedIn', this.loginObj.email);
  }else{
    alert("Wrong email or password");
  }
}
}