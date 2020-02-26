import { Component, OnInit, NgZone, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { FilterService, ExpenseFilter } from 'src/app/services/filter/filter.service';
import { take, skip, filter, } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {

  public groups$;

  //Filters
  public dateSelected: string;
  public groupSelected: string;
  public allDatesSelected: boolean;
  public allGroupsSelected: boolean;

  sortMethod: string;
  sortMethods: string[] = ['date', 'amount'];

  constructor(
    private groupService: GroupsService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.groups$ = this.groupService.getGroups();

    this.filterService.filterState$.subscribe((state: ExpenseFilter) => {
      //FIXME : quick workaround for testing
      setTimeout(() => {
          if (state.date) {
            this.dateSelected = `${state.date.year}-${state.date.month}`;
            this.allDatesSelected = false;
          } else {
            this.dateSelected = null;
            this.allDatesSelected = true;
          }
          if (state.group) {
            this.groupSelected = state.group;
            this.allGroupsSelected = false;
          } else {
            this.groupSelected = null;
            this.allGroupsSelected = true;
          }            
      }, 100);
    });

  
  this.filterService.filterShown$.pipe(
    skip(1),
    filter((val) => !val)
    ).subscribe((isShown) => {
      this.submitFilter();
    })
    
    this.sortMethod = localStorage.getItem("sortMethod") || "date";
  }
  
  groupChanged(e: any) {
    this.allGroupsSelected = e.checked;
    if(!e.checked){
        this.groupSelected= "general"
    }
  }

  dateChanged(e: any) {
    this.allDatesSelected = e.checked;
    if(!e.checked){
      this.dateSelected= this.filterService.getCurrentMonthFilter();
    }
  }


  submitFilter() {
    let currentFilter = JSON.parse(localStorage.getItem("filter"))
    let newFilter: Partial<ExpenseFilter>= {}
    if(!this.allGroupsSelected){
      newFilter.group=this.groupSelected;
    }
    if(!this.allDatesSelected){
      newFilter.date={
        month: this.dateSelected.substring(5),
        year: this.dateSelected.substring(0, 4)
      }
    }
    let currentSortMethod= localStorage.getItem("sortMethod");
    if(this.sortMethod !== currentSortMethod){
      this.filterService.setSortMethod(this.sortMethod);
    }

    if(JSON.stringify(currentFilter) !== JSON.stringify(newFilter) ){
      this.filterService.setFilter(newFilter)
    }
  }
}
