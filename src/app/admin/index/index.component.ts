import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
constructor(public adminSrvice : AdminService)
{

}
ngOnInit()
{
  this.adminSrvice.GetAllCourses();
}
}
