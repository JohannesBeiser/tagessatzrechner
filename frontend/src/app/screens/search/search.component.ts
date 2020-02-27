import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild("searchInput") public searchInputElement: ElementRef;
  // public seachtext: string;
  componentDestroyed$: Subject<void> = new Subject();

  public searchTerm$: Subject<string>;
  public results$: Observable<Expense[]>

  constructor(
    public sliderService: SliderService,
    private expenseService: ExpenseService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.searchTerm$= new Subject<string>();
    this.results$ = this.searchTerm$.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap((term)=>this.getSearchResult(term))
    );
  }

  getSearchResult(term: string): Observable<Expense[]>{
    return this.expenseService.getExpenses().pipe(
     map(expenses=>{
      return expenses.filter(expense=>{
        return expense.name.toLowerCase().includes(term.toLowerCase()) || expense.description.toLowerCase().includes(term.toLowerCase())
      }).reverse().sort(this.filterService.dateSorter)
     })
    )
  }

  ngAfterViewInit(){
    this.searchInputElement.nativeElement.focus();
  }

  public clear() {
    // this.seachtext = "";
    this.searchInputElement.nativeElement.focus();
  }

}
