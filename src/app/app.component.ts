import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearningAngular1';
  
  ActivateAddEditDepComp:boolean=false;
  newComponentClick(){
    console.log("âsdasd")
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
  }
}
