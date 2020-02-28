import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GroupsService, GroupItem } from 'src/app/services/groups/groups.service';
import { FilterService, ExpenseFilter } from 'src/app/services/filter/filter.service';
import {  skip, filter, } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {

  @ViewChild("monthPickerInput") public monthPickerInputElement: ElementRef;
  @ViewChild("groupPickerInput") public groupPickerInputElement: ElementRef;

  public groups$: Observable<GroupItem[]>;

  //Filters
  public dateSelected: string;
  public groupSelected: string;
  public allDatesSelected: boolean;
  public allGroupsSelected: boolean;

  sortMethod: string;
  sortMethods: string[] = ['date', 'amount'];
  monthMethod: string;


  constructor(
    private groupService: GroupsService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.groups$ = this.groupService.getGroups();

    this.filterService.filterState$.subscribe((state) => {
      //FIXME : quick workaround for testing
      setTimeout(() => {
          if (state.date) {
            this.dateSelected = `${state.date.year}-${state.date.month}`;
            this.monthMethod = "specific";
          } else {
            this.dateSelected = null;
            if(localStorage.getItem("last30Active") == "active"){
              this.monthMethod = "last30"
            }else{
              this.monthMethod = "all";
            }
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
    this.allGroupsSelected = !e.checked;
    if(e.checked){
        this.groupSelected= "General"
    }
  }

  dateChanged(e: any) {
    // debugger;
    if(e.value == 'specific'){
      this.dateSelected= this.filterService.getCurrentMonthFilter();
    }
  }


  submitFilter() {
    let currentFilter = JSON.parse(localStorage.getItem("filter"))
    let currentLast30Active =localStorage.getItem("last30Active");

    let newFilter: Partial<ExpenseFilter>= {}
    if(!this.allGroupsSelected){
      newFilter.group=this.groupSelected;
    }

    if(this.monthMethod == 'specific'){
      newFilter.date={
        month: this.dateSelected.substring(5),
        year: this.dateSelected.substring(0, 4)
      }
      localStorage.setItem("last30Active", "inactive")
    }else if(this.monthMethod == 'all'){
      localStorage.setItem("last30Active", "inactive")
    }else{
      localStorage.setItem("last30Active", "active")
    }

    let currentSortMethod= localStorage.getItem("sortMethod");
    if(this.sortMethod !== currentSortMethod){
      this.filterService.setSortMethod(this.sortMethod);
    }

    if(JSON.stringify(currentFilter) !== JSON.stringify(newFilter) || currentLast30Active !== localStorage.getItem("last30Active") ){
      this.filterService.setFilter(newFilter)
    }
  }
}
