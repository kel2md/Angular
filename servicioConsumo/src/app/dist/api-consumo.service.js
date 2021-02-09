"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiConsumoService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ApiConsumoService = /** @class */ (function () {
    //private urlApi:string = 'http://localhost/claseApi/api/';
    function ApiConsumoService(http) {
        this.http = http;
        this.header = new http_1.HttpHeaders()
            .set('X-API-KEY', '831aa9fc4e81433e276569bcaf83fbff')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json  ; charset=utf-8');
        this.opciones = {
            headers: this.header
        };
        this.urlApi = 'http://clase.multimarketapp.com/api/';
    }
    ApiConsumoService.prototype.getDatos = function (direccionApi) {
        return this.http.get(this.urlApi + direccionApi, this.opciones);
    };
    ApiConsumoService.prototype.postDatos = function (direccionApi, body) {
        return this.http.post(this.urlApi + direccionApi, body, this.opciones);
    };
    ApiConsumoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiConsumoService);
    return ApiConsumoService;
}());
exports.ApiConsumoService = ApiConsumoService;
