import { Component, OnInit } from '@angular/core';
import { WhereToFindService } from '../where-to-find/where-to-find.service';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';


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

  @ViewChild("search")
  public searchElementRef: ElementRef;


  constructor(
    private whereToFindService: WhereToFindService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }



  ngOnInit() {
    this.whereToFindService.getAddress()
      .subscribe(res => {
        this.locationsArray = res;
        this.locationsArray.forEach((el, idx) => {
          this.showItem.push(false);
        });
      });


    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement, {
          types: ['address']
        });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // add map calls here
          this.center = {
            Latitude: place.geometry.location.lat(),
            Longitude: place.geometry.location.lng(),
            zoon: 15
          }
        });
      });
    });
  }


  showOnGoogle(lat, long, idx) {
    this.showItem.forEach((el, idx) => {
      this.showItem[idx] = false;
    });

    this.center = {
      Latitude: lat,
      Longitude: long,
      zoon: 12
    }

    this.showItem[idx] = true;
  }
}
