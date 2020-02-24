import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { Observable } from 'rxjs';
import { FilterService, ExpenseFilter } from 'src/app/services/filter/filter.service';
import { FormGroup, FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {

  public groups: any[];
  public filterForm: FormGroup;

  constructor(
    private groupService: GroupsService,
    private filterService: FilterService
  ) { }


  ngOnInit(): void {
    this.groupService.getGroups().subscribe((val) => {
      if (val.length > 0) {
        this.groups = [{ groupName: "general" }, ...val]
      }
    })

    this.filterForm = new FormGroup({
      group: new FormControl(''),
      date: new FormControl(''),
    });

    this.filterService.filterState$.pipe(
      take(1)
    ).subscribe((state: ExpenseFilter) => {
      
      //FIXME: quick workaround for testing
      setTimeout(() => {
        this.filterForm.reset({
          date: `${state.date.year}-${state.date.month}`,
          group: state.group
        });           
      }, 100);
    });

  }

  submitFilter() {
    this.filterService.setFilter({
      group: this.filterForm.value.group,
      date: {
        month: this.filterForm.value.date.substring(5),
        year: this.filterForm.value.date.substring(0, 4)
      },
    })
  }
}
