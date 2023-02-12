import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: "app-profolii",
  templateUrl: './app.component.html',
  styleUrls: ["./app.components.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  pageUrl: string = document.location.href;
}
