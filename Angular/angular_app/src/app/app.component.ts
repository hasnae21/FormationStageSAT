import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DefaultHomeComponent } from './default-home/default-home.component';
//import { createPopper } from '@popperjs/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'angular_app';
  ngOnInit(){
    console.log("hello from Hasnae");
  }

/*
@ViewChild(DefaultHomeComponent)
contentProject: DefaultHomeComponent;
*/

  @ViewChildren(DefaultHomeComponent)
  homeList!: QueryList<DefaultHomeComponent>;

  ngAfterViewInit(): void {
    
    //this.contentProject.isUserSuperAdmin = true;
    //console. log(this .box.nativeElement. innerHTML) ;

    //console.log(this.homeList.length);
    //this.homeList.get(0).isUserSuperAdmin = true;
    //console.log(this.homeList.get(0).nativeElement.innerHTML);


  }

}
