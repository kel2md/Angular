import { ApiConsumoService } from './api-consumo.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  actividad : {
    act_id : number,
    act_codigo  : number ,
    act_detalle : string
  };

  datos = null;

  constructor(private consumo: ApiConsumoService){}
  
public getData(){
  this.consumo.getDatos('actividades')
      .subscribe(
        resultado => {
          this.datos = resultado;
          console.log(this.datos);
        },
        error => {
          console.log('Error en datos');
        }
      )
}
public postData(){
  this.actividad = {
    act_id : null,
    act_codigo  : 8999 ,
    act_detalle : "jashdkhfak"
  };
  this.consumo.postDatos('actividad',this.actividad)
    .subscribe(
      resultado => {
        //Aqui recibir los estatus ok 201
        console.log(" ok ", resultado);
      },
      error =>{
        // estatus fallidos 500 400
        console.log(" mal ", error);
      }

    );
}
 ngOnInit(){
    this.getData();
 }

}
