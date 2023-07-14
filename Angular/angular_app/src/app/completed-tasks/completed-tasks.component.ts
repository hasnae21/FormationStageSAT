import { AfterContentInit, AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent implements OnInit, AfterContentInit, AfterViewChecked, OnDestroy {
  constructor() { }


  ngOnInit(): void {
    console.log("Inside completed tasks component");
  }

  ngAfterContentInit(): void {
    console.log("methode called after the methode onInit id initialized");
  }

  ngAfterViewInit(): void {
    console.log("ng after view init");
  }

  ngAfterViewChecked(): void{
    console.log("After view is checked");
  }

  ngOnDestroy(): void {
    console.log("Inside destroyed");
  }
  
}
