import { Component, OnInit } from '@angular/core';
import { Items } from '../../Models/items';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../Service/admin.service';
import { NgFor } from '@angular/common';
import { AuthenticationService } from '../../Service/authentication.service';



@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  [x: string]: any;
  ngOnInit(): void {
  
    
  }
  username:string = '';
  password:string = '';
  inValid= false;
  constructor(private adminService: AdminService,private router:Router,private authent:AuthenticationService) { }

  goToItem(){
    this.router.navigate(['/item']);
  }
  checkLogin(){
    if(this.authent.adminLogin(this.username,this.password)){
    
      this.router.navigate(['/item']);
      this.inValid= false;

    }else{
      alert('wrong credentials');
      this.router.navigate(['/admin']);
      this.inValid= true;
      
    }

  }


}
