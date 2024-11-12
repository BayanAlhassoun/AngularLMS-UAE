import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
constructor(public adminSrvice : AdminService, public dialog: MatDialog)
{

}

@ViewChild('callDeleteDialog') callDelete : any;
@ViewChild('callCreateDialog') callCreate: any
ngOnInit()
{
  this.adminSrvice.GetAllCourses();
}

DeleteCourse(id: number)
{
  this.adminSrvice.DeleteCourse(id);
}

openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: number): void {
 const dialog = this.dialog.open(this.callDelete, {
    width: '400px',
    enterAnimationDuration,
    exitAnimationDuration,
  });

dialog.afterClosed().subscribe({
  next:(result)=>{
    if (result == 'yes')
    {
      this.adminSrvice.DeleteCourse(id)
    }
    else if(result == 'no')
    {
      console.log("Ok, thanks");
      
    }
  }
})

}

openCreateDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(this.callCreate ,  {
    width: '250px',
    enterAnimationDuration,
    exitAnimationDuration,
  });
}

}
