"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var api_consumo_service_1 = require("./api-consumo.service");
describe('ApiConsumoService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(api_consumo_service_1.ApiConsumoService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
