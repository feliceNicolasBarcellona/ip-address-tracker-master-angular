import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { CoordsDetailsComponent } from './shared/coords-details/coords-details.component';
import { MapComponent } from './features/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CoordsDetailsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
