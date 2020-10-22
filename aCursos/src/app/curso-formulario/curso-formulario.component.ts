import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-formulario',
  templateUrl: './curso-formulario.component.html',
  styleUrls: ['./curso-formulario.component.css']
})
export class CursoFormularioComponent implements OnInit {
  curso: string[];
  nombre: string;
  edad: number;
  respuesta: string;
  constructor() {
    this.curso = ['Java','Oracle','PHP','TypeScript','JavaScript'];
    this.nombre="";
    this.edad=0;
  }
  guardar(nombre:string, edad:number){
    this.respuesta = `nombre:${nombre} edad:${edad}`;
    return false;    
  }

  ngOnInit(): void {
  }
  
}
