import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name":"企业协作平台",
      "desc":"这是一个企业内部项目",
      "coverImg":'/assets/demo1.jpeg'
    }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent,{data:{dark:true}});
    dialogRef.afterClosed().subscribe(result =>{console.log(result)});
  }

}
