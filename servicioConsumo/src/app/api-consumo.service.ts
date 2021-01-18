import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumoService {

  private header = new HttpHeaders()
  .set('X-API-KEY','831aa9fc4e81433e276569bcaf83fbff')
  .set('Accept','application/json')
  .set('Content-Type' ,'application/json  ; charset=utf-8');

  private opciones = { //objeto
    headers : this.header
  };
  private urlApi:string = 'http://clase.multimarketapp.com/api/';
  //private urlApi:string = 'http://localhost/claseApi/api/';

  constructor(private http: HttpClient) { }

  public getDatos(direccionApi: string){
    return this.http.get(this.urlApi+direccionApi,this.opciones);
  }
  public postDatos(direccionApi: string,body){
    return this.http.post(this.urlApi+direccionApi,body,this.opciones);
  }


}
