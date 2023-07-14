import { Element } from '@angular/compiler';
import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss']
})
export class DefaultHomeComponent implements OnInit, AfterViewInit{
  roleId=0;
  num1=10;
  num2=45;

  ngOnInit(): void {
    this.sun();
    this.add();
  }










  @ContentChild('admin') adminTemplate!: TemplateRef<any>;

  @ViewChild('box') refbox!: ElementRef;
  @ViewChild('h1') refh1!: ElementRef;

  @ViewChildren("box") refsbox!: QueryList<ElementRef>;



  ngAfterViewInit():void{
    console.log(this.refbox);
    this.refbox.nativeElement.innerHTML= "<h1>fromcomponent</h1>"
    this.refbox.nativeElement.style.background = "red" ;
    console.log(this.refh1);
    this.refh1.nativeElement.style.color = "white" ;


  }



























  sun() {
    console.log(this.roleId);
    console.log("This is a sum method");
  }
  add() {
    console.log(this.num1 + this.num2);
  }
}
