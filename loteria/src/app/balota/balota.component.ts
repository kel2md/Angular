import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-balota',
  templateUrl: './balota.component.html',
  styleUrls: ['./balota.component.css']
})
export class BalotaComponent implements OnInit {
  //Recibe Valor del Componente padre
  @Input() valor : number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
