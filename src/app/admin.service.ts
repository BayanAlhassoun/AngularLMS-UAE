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

}

