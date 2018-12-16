import { Component, OnInit } from '@angular/core';
import { WhereToFindService } from '../where-to-find/where-to-find.service';

@Component({
  selector: 'app-where-to-find',
  templateUrl: './where-to-find.component.html',
  styleUrls: ['./where-to-find.component.scss']
})

export class WhereToFindComponent implements OnInit {
  locationsArray = [];
  center = {
    Latitude: -18.9838792,
    Longitude: -50.2046212,
    zoon: 4.2
  }
  showItem = [];

  constructor(
    private whereToFindService: WhereToFindService
  ) { }

  ngOnInit() {
    this.whereToFindService.getAddress()
      .subscribe(res => {
        this.locationsArray = res;
        this.locationsArray.forEach((el, idx) => {
          this.showItem.push(false);
        });
      })
  }

  showOnGoogle(lat, long, idx) {
    this.center = {
      Latitude: lat,
      Longitude: long,
      zoon: 12
    }

    this.showItem[idx] = true;
  }
}
