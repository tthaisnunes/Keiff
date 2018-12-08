import { Component, OnInit } from '@angular/core';
import { tns } from 'node_modules/tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-instagram-posts',
  templateUrl: './instagram-posts.component.html',
  styleUrls: ['./instagram-posts.component.scss']
})
export class InstagramPostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const slider_instagram_posts = tns({
      container: '#customize',
      controlsContainer: '#customize-controls',
      items: 1,
      gutter: 30,
      autoplayTimeout: 1000,
      swipeAngle: false,
      speed: 400,
      nav: false,
      responsive: {
        640: {
          items: 2,
        },
        900: {
          items: 4,
        }
      }
    });
  }

}
