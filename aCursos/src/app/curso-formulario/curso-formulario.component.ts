import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-curso-formulario',
  templateUrl: './curso-formulario.component.html',
  styleUrls: ['./curso-formulario.component.css']
})
export class CursoFormularioComponent implements OnInit {
  curso: {
    nombre:string,
    descripcion:string,
    duracion:number,
    costo:number
  };
  cursos=[];

  constructor() {
    this.curso = {
      nombre:null,
      descripcion:null,
      duracion:0,
      costo:0
    }
    this.cursos = [{nombre:'Java',descripcion:'Curso Nivel I',duracion:24,costo:15 },
    {nombre:'Oracle',descripcion:'Curso Nivel I',duracion:24,costo:12 },
    {nombre:'PHP',descripcion:'Curso Nivel I',duracion:24,costo:10 },
    {nombre:'Java2',descripcion:'Curso Nivel 2',duracion:42,costo:18 }]
  }

  cantCursos(){
    return this.cursos.length>0;
  }
  selectCurso(curso){
    this.curso.nombre = curso.nombre;
    this.curso.descripcion = curso.descripcion;
    this.curso.duracion = curso.duracion;
    this.curso.costo = curso.costo;
  }
  borrarCurso(curso){
    for(let i=0;i<this.cursos.length;i++)
        if (this.cursos[i].nombre==curso.nombre)
        {
          this.cursos.splice(i,1);
          return;
        }
  }
  registrarCurso() {
    for(let x=0;x<this.cursos.length;x++){
      if (this.cursos[x].nombre==this.curso.nombre)
      {
        alert('El Curso ya está Registrado');
        return;
      }
    }
    this.cursos.push({nombre:this.curso.nombre,
                      descripcion:this.curso.descripcion,
                      duracion:this.curso.duracion,
                      costo:this.curso.costo });
    this.curso.nombre=null;
    this.curso.descripcion=null;
    this.curso.duracion=0;
    this.curso.costo=0;
  }
  modificarCurso(){}
  ngOnInit(): void {
  }

}
