import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
constructor(public adminService: AdminService)
{

}


ngOnInit()
{
  this.adminService.GetAllCategories()
}

searchText: string = ""
Search()
{
  this.adminService.categories = this.adminService.categories.
  filter((x:any)=> x.categoryname.toUpperCase().includes(this.searchText.toUpperCase()))
}
}
