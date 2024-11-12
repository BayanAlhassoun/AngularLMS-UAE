import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  names = ["Amal", "Aishah", "Shaikha"]

  constructor(private http: HttpClient) { }

courses: any
GetAllCourses()
{
  this.http.get("https://localhost:7139/api/course").subscribe(
    {
      next: (data)=> {this.courses = data},
      error: (err)=> {console.log(err);
      }
    }
  )
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
  next:()=>{console.log("Created Successfully");
  },
  error:()=>{console.log("Something wont wrong");
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


}

