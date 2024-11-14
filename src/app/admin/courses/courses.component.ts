import { Component } from '@angular/core';
import { AdminRoutingModule } from '../admin-routing.module';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
constructor(public adminService: AdminService)
{

}

ngOnInit()
{
  this.adminService.GetAllCourses()
}
}
