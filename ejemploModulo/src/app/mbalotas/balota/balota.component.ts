import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balota',
  templateUrl: './balota.component.html',
  styleUrls: ['./balota.component.css']
})
export class BalotaComponent implements OnInit {

  @Input() numero: number;

  constructor() { }

  ngOnInit(): void {
  }

}
