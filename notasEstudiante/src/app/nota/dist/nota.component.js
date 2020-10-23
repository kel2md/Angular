"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotaComponent = void 0;
var core_1 = require("@angular/core");
var NotaComponent = /** @class */ (function () {
    function NotaComponent() {
        this.nombre = "Pedro Gaona";
        this.edad = 23;
        this.notas = [5, 3, 7, 9, 10];
        this.promedio = 0;
    }
    NotaComponent.prototype.promedioCalculo = function () {
        var suma = 0;
        for (var _i = 0, _a = this.notas; _i < _a.length; _i++) {
            var i = _a[_i];
            suma = suma + i;
        }
        this.promedio = suma / 5;
        alert('Promedio:' + this.promedio);
    };
    NotaComponent.prototype.ngOnInit = function () {
    };
    NotaComponent = __decorate([
        core_1.Component({
            selector: 'app-nota',
            templateUrl: './nota.component.html',
            styleUrls: ['./nota.component.css']
        })
    ], NotaComponent);
    return NotaComponent;
}());
exports.NotaComponent = NotaComponent;
