import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  students: Object[];

  constructor() { 
    console.log("demo honstructoe");
    this.students=[
      { 
        name:'Aditya',
        age:23
    },
    {
        name:'Ikram',
        age:24
    }];
  }

  ngOnInit() {
    console.log("ngonit oidajijdao");
  }

}