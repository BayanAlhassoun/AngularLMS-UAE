import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(public adminService: AdminService)
{

}
  loginForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  })

  Login()
  {
    this.adminService.Login(this.loginForm.value)
  }
}
