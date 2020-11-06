import { SpaServiciosService } from './../spa-servicios.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-servicios',
  templateUrl: './data-servicios.component.html',
  styleUrls: ['./data-servicios.component.css']
})
export class DataServiciosComponent implements OnInit {

  mis_servicios = null;

  constructor(private servicio: SpaServiciosService){
  }

  getData():void{
    this.mis_servicios = this.servicio.data();
  }
  ngOnInit() {
    this.getData();
  }

}
