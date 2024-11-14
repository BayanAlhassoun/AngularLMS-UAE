import { Injectable, ɵresetJitOptions } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { concatWith } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  names = ["Amal", "Aishah", "Shaikha"]

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService, public route: Router) { }

courses: any
GetAllCourses()
{
  this.spinner.show();
  this.http.get("https://localhost:7139/api/course").subscribe(
    {
      next: (data)=> {this.courses = data},
      error: (err)=> {console.log(err);
      }

    }
  )
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 5000);

}


DeleteCourse(id: number)
{
this.http.delete("https://localhost:7139/api/course/"+ id).subscribe(
  {
    next:()=>{console.log("Deleted Successfully");
    },
    error: (err)=>{console.log(err);
    }
  }
)
}

CreateCourse(course: any)
{
this.http.post("https://localhost:7139/api/course", course).subscribe({
  next:()=>{this.toastr.success("Course Created Successfully");
  },
  error:()=>{this.toastr.error("Something wont wrong")
  }
})
}

UpdateCourse(course: any)
{
  console.log(course);
  
  this.http.put("https://localhost:7139/api/course", course).subscribe({
    next:()=>{"Updated Successfully"},
    error: (err)=>{console.log(err);
    }
  })
}

categories: any
GetAllCategories()
{
  this.http.get("https://localhost:7139/api/category").subscribe({
    next:(data)=>{this.categories = data},
    error:(err)=>{console.log(err);
    }
  })
}

course: any
GetCourseById(id: number)
{
  this.http.get("https://localhost:7139/api/course/GetById/"+ id).subscribe({
    next:(data)=>{this.course = data},
    error:(err)=>{console.log(err);
    }
  })
}

token: any
Login(login: any)
{
  let headerOption = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }

  let options = {
    headers: new HttpHeaders(headerOption)
  }
  console.log(login);
  
  this.http.post("https://localhost:7139/api/login", login, options).subscribe({
    next: (result)=>{
      this.token = result
      console.log(this.token);
      
localStorage.setItem("token", this.token)
let user: any = jwtDecode(this.token)
console.log(user);
localStorage.setItem("user", JSON.stringify(user))

if(user.RoleId == "1")
{
this.route.navigate(['admin/index'])
}
else if (user.RoleId == "2")
{
  this.route.navigate(['home/index'])
}
else 
{
  this.toastr.error("Unauthorized")
}
    },
    error: (err)=>{console.log(err);
      this.toastr.error("Unauthorized")

    }
  })
}

}

