import { Component} from '@angular/core';

@Component({
  selector: 'app-progress-is',
  templateUrl: './progress-is.component.html',
  styleUrls: ['./progress-is.component.css']
})
export class ProgressIsComponent  {

  progreso1: number =25;
  progreso2: number =25;

   get getProgreso1(){
     return `${this.progreso1}%`;

   }
   get getProgreso2(){
    return `${this.progreso2}%`;

  }

   
}
