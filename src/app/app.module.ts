import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { AppComponent } from "./app.component";
import { SwiperModule } from "swiper/angular";
import { RadialMenuComponent } from './components/radial-menu/radial-menu.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, SwiperModule],
  declarations: [AppComponent, RadialMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}