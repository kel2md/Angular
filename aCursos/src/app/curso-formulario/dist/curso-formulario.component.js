"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CursoFormularioComponent = void 0;
var core_1 = require("@angular/core");
var CursoFormularioComponent = /** @class */ (function () {
    function CursoFormularioComponent() {
        this.cursos = [];
        this.curso = {
            nombre: null,
            descripcion: null,
            duracion: 0,
            costo: 0
        };
        this.cursos = [{ nombre: 'Java', descripcion: 'Curso Nivel I', duracion: 24, costo: 15 },
            { nombre: 'Oracle', descripcion: 'Curso Nivel I', duracion: 24, costo: 12 },
            { nombre: 'PHP', descripcion: 'Curso Nivel I', duracion: 24, costo: 10 },
            { nombre: 'Java2', descripcion: 'Curso Nivel 2', duracion: 42, costo: 18 }];
    }
    CursoFormularioComponent.prototype.cantCursos = function () {
        return this.cursos.length > 0;
    };
    CursoFormularioComponent.prototype.selectCurso = function (curso) {
        this.curso.nombre = curso.nombre;
        this.curso.descripcion = curso.descripcion;
        this.curso.duracion = curso.duracion;
        this.curso.costo = curso.costo;
    };
    CursoFormularioComponent.prototype.borrarCurso = function (curso) {
        for (var i = 0; i < this.cursos.length; i++)
            if (this.cursos[i].nombre == curso.nombre) {
                this.cursos.splice(i, 1);
                return;
            }
    };
    CursoFormularioComponent.prototype.registrarCurso = function () {
        for (var x = 0; x < this.cursos.length; x++) {
            if (this.cursos[x].nombre == this.curso.nombre) {
                alert('El Curso ya está Registrado');
                return;
            }
        }
        this.cursos.push({ nombre: this.curso.nombre,
            descripcion: this.curso.descripcion,
            duracion: this.curso.duracion,
            costo: this.curso.costo });
        this.curso.nombre = null;
        this.curso.descripcion = null;
        this.curso.duracion = 0;
        this.curso.costo = 0;
    };
    CursoFormularioComponent.prototype.modificarCurso = function () { };
    CursoFormularioComponent.prototype.ngOnInit = function () {
    };
    CursoFormularioComponent = __decorate([
        core_1.Component({
            selector: 'app-curso-formulario',
            templateUrl: './curso-formulario.component.html',
            styleUrls: ['./curso-formulario.component.css']
        })
    ], CursoFormularioComponent);
    return CursoFormularioComponent;
}());
exports.CursoFormularioComponent = CursoFormularioComponent;
