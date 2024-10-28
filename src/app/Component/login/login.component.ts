import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  [x: string]: any;

  loginData = {
    username: '',
    password: ''
  };
  errorMessage: string='';
  constructor(private router: Router) {}
  onSubmit() {
    if (this.loginData.username=== 'admin' && this.loginData.password === '456') {
      // Successful login logic here (e.g., navigate to another page)
      console.log('Login successful');
    } else {
      // Display error message for failed login
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
    
  }
  goToAdminPage(){
    this.router.navigate(['/admin']);
     // Navigate to admin page
     console.log('Navigating to admin page');
     window.location.href = '/admin';
  }
}

