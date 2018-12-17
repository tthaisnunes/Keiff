import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './common/banner/banner.component';
import { ProductsComponent } from './common/products/products.component';
import { InstagramPostsComponent } from './common/instagram-posts/instagram-posts.component';
import { FooterComponent } from './common/footer/footer.component';
import { WhereToFindComponent } from './pages/where-to-find/where-to-find.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { WhereToFindService } from './pages/where-to-find/where-to-find.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BannerComponent,
    ProductsComponent,
    InstagramPostsComponent,
    FooterComponent,
    WhereToFindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
		HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBv2Pr-oQoTF9UuMvlxRXvtFyyonlMOHMU', libraries: ["places"]}),
    AgmSnazzyInfoWindowModule
  ],
  providers: [
    GoogleMapsAPIWrapper,
    WhereToFindService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
