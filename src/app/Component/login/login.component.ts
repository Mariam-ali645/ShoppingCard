import { HttpClient } from '@angular/common/http';
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
  //[x: string]: any;

  loginData = {
    username: '',
    password: ''
  };
  welcome :string='';
  errorMessage: string='';
  constructor(  private http :HttpClient ,private router: Router) {}

  /* login(username: string, password: string) {
    this.http.post('http://localhost:8080/login', { username, password }).subscribe(
      (response: any) => {
        // Store token (for authorization on subsequent requests)
        localStorage.setItem('authToken', response.token);

        // Navigate to item list page
        this.router.navigate(['http://localhost:8080/item']);
      },
      error => {
        console.error('Login failed', error);
        // Optional: show an error message to the user
      }
    );
  }
 */







  onSubmit() {
    if (this.loginData.username=== 'admin' && this.loginData.password === '456') {
       document.write ("Welcome Admin! ");
       this.goToAdminPage();
      
    } else if(this.loginData.username=== 'customer' && this.loginData.password === '123'){
         document.write ("Welcome Customer! ");
        this. goToCustomerPage();
      
    }else {
      // Display error message for failed login
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
   
    
  }
  goToAdminPage(){
    this.router.navigate(['https://localhost:8080/item']);
     
     window.location.href = '/admin';
     
  }
  goToCustomerPage(){
    this.router.navigate(['https://localhost:8080/item']);
     
     window.location.href = '/customer';
     
  }
}

