import { Injectable } from '@angular/core';
import { DATA_SERVICIOS } from './coleccion_servicios'

@Injectable({
  providedIn: 'root'
})
export class SpaServiciosService {
  servicios_spa = DATA_SERVICIOS;

  constructor() { }

  data(){
      return this.servicios_spa;
  }
}
