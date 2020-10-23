import { IEjemplo } from './../ejemplo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {

  ejemplo: IEjemplo = {
    id : 1,
    nombre : 'Matematica'
  }

  constructor() {}

  ngOnInit(): void {
  }

}
