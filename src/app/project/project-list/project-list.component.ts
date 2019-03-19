import { Component, OnInit } from '@angular/core';

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
  ]
  constructor() { }

  ngOnInit() {
  }

}