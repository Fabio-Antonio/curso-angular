import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels: string[] = ['Doctores', 'Enfermeras', 'Administrativo'];
  public data = [
    [10, 15, 40],
    
  ];

}
