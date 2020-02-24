import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationStart } from '@angular/router';
import { slideInAnimation } from './animations';
import { SliderService } from './services/slider/slider.service';
import { filter } from 'rxjs/operators';
import { FilterService } from './services/filter/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'Expenses';
  public appHeadline: string = "ExpenseManager";

  constructor(
    private router: Router,
    public sliderService: SliderService,
    public filterService: FilterService
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      let url = event.url.substring(1);
      switch (url) {
        case "home":
          this.appHeadline = "Overview"
          break;
          
        case "groups":
          this.appHeadline = "Groups"
          break;

        case "settings":
          this.appHeadline = "Settings"
          break;

        default:
          this.appHeadline = "Overview"
          break;
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
