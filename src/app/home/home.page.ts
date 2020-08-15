import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [
    { id:1, name: 'teste', value: 123 },
    { id:2, name: 'teste2', value: 123 },
    { id:3, name: 'teste3', value: 123 },
  ]
  constructor() { }

}
