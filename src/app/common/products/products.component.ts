import { Component, OnInit } from '@angular/core';
import { tns } from 'node_modules/tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const slider_products = tns({
      container: '.slider-produts',
      items: 1,
      slideBy: 'page',
      controls: false,
      responsive: {
        640: {
          items: 2
        },
        900: {
          items: 4
        }
      }
    });
  }

}
