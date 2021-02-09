"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(consumo) {
        this.consumo = consumo;
        this.datos = null;
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.consumo.getDatos('actividades')
            .subscribe(function (resultado) {
            _this.datos = resultado;
            console.log(_this.datos);
        }, function (error) {
            console.log('Error en datos');
        });
    };
    AppComponent.prototype.postData = function () {
        this.actividad = {
            act_id: null,
            act_codigo: 8999,
            act_detalle: "jashdkhfak"
        };
        this.consumo.postDatos('actividad', this.actividad)
            .subscribe(function (resultado) {
            //Aqui recibir los estatus ok 201
            console.log(" ok ", resultado);
        }, function (error) {
            // estatus fallidos 500 400
            console.log(" mal ", error);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
