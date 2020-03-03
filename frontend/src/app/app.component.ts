import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationStart } from '@angular/router';
import { slideInAnimation } from './animations';
import { SliderService } from './services/slider/slider.service';
import { filter } from 'rxjs/operators';
import { FilterService } from './services/filter/filter.service';
import { combineLatest } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit{
  title = 'Expenses';
  public appHeadline: string = "ExpenseManager";

  public currentFilter$ = this.filterService.getFilter();
  public filterTitles: { date: string; group: string } = null;

  constructor(
    private router: Router,
    public sliderService: SliderService,
    public filterService: FilterService,
    private datePipe: DatePipe,
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

  ngOnInit(){
    combineLatest(this.currentFilter$, this.filterService.monthSwitched$).subscribe(([filter, monthSwitch]) => {
      let tempString = {
        date: null,
        group: null
      }
      if (monthSwitch) {
        tempString.date = this.datePipe.transform(`${monthSwitch.year}-${monthSwitch.month}-01`, 'MMM y');
      } else {
        if (filter.date) {
          tempString.date = this.datePipe.transform(`${filter.date.year}-${filter.date.month}-01`, 'MMM y');
        }else if(filter.last30Active){
          tempString.date = "Last 30 days" 
        }
      }

      if (filter.groups) {
        // TODO not just first but all
        tempString.group = `${filter.groups[0]}`;
        for(let i=1; i<filter.groups.length;i++){
          tempString.group += `, ${filter.groups[i]}`
        }
      }
      this.filterTitles = tempString;
    })
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
