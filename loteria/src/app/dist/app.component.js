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
    function AppComponent() {
        this.title = 'loteria';
        this.valor1 = -1;
        this.valor2 = -1;
        this.valor3 = -1;
        this.valor4 = -1;
        this.numeroGanador = "";
        this.suma = 0;
    }
    AppComponent.prototype.obtenerNumero = function () {
        var numero;
        numero = (Math.trunc(Math.random() * 9) - 1) + (1);
        if (numero < 0)
            numero = 0;
        return numero;
    };
    AppComponent.prototype.jugar = function () {
        this.valor1 = this.obtenerNumero();
        this.valor2 = this.obtenerNumero();
        this.valor3 = this.obtenerNumero();
        this.valor4 = this.obtenerNumero();
        this.numeroGanador = "El n\u00FAmero ganador es: " + this.valor1 + " " + this.valor2 + " " + this.valor3 + "\n    " + this.valor4;
        this.suma = this.valor1 + this.valor2 + this.valor3 + this.valor4;
    };
    AppComponent.prototype.llamarParImpar = function (mensaje) {
        this.mensaje = "Padre:" + mensaje;
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
