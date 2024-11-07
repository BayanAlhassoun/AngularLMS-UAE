import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
constructor(public adminService: AdminService){}

ngOnInit()
{
  this.adminService.GetAllCourses()
}
}
