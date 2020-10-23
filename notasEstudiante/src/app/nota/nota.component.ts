import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  nombre : string;
  edad :number;
  promedio: number;
  notas:number[];
  constructor() {
    this.nombre="Pedro Gaona";
    this.edad= 23;
    this.notas = [5,3,7,9,10];
    this.promedio=0;
   }
   promedioCalculo(){
     let suma : number = 0;
     for(const i of this.notas){
        suma = suma+i;
     }
     this.promedio = suma/5;
     alert ('Promedio:'+this.promedio);     
   }

  ngOnInit(): void {
  }

}
