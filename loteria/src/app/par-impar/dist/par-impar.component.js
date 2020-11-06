"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ParImparComponent = void 0;
var core_1 = require("@angular/core");
var ParImparComponent = /** @class */ (function () {
    function ParImparComponent() {
        //Manda valor al componente padre
        this.parImpar = new core_1.EventEmitter();
    }
    ParImparComponent.prototype.calculoParImpar = function (_valor) {
        if (_valor)
            this.valor = _valor;
        if (this.valor % 2 == 0)
            this.mensaje = "La suma de las balotas es: " + this.valor + " y es un n\u00FAmero Par";
        else
            this.mensaje = "La suma de las balotas es: " + this.valor + " y es un n\u00FAmero Impar";
        this.parImpar.emit(this.mensaje);
    };
    ParImparComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], ParImparComponent.prototype, "valor");
    __decorate([
        core_1.Output()
    ], ParImparComponent.prototype, "parImpar");
    ParImparComponent = __decorate([
        core_1.Component({
            selector: 'app-par-impar',
            templateUrl: './par-impar.component.html',
            styleUrls: ['./par-impar.component.css']
        })
    ], ParImparComponent);
    return ParImparComponent;
}());
exports.ParImparComponent = ParImparComponent;
