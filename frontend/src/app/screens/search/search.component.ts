import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, share } from 'rxjs/operators';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild("searchInput") public searchInputElement: ElementRef;
  public seachtext: string;
  componentDestroyed$: Subject<void> = new Subject();

  public searchTerm$: Subject<string>;
  public results$: Observable<Expense[]>
  public collapseNotifier: Subject<void> = new Subject();

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
      filter(term=>term.length>0),
      switchMap((term)=>this.getSearchResult(term))
    );
  }

  getSearchResult(terms: string): Observable<Expense[]>{
    let singleTerms = terms.toLowerCase().split(",");
    //remove leading and ending whitespace after splitting
    let normalizedTerms= singleTerms.map(el=>{
      let res= el;
      if(el[0]===' '){
        res= res.substring(1);
      }
      if(el[el.length-1]===' '){
        res= res.substring(0, res.length-1);
      }
      return res;
    });
    return this.expenseService.getExpenses().pipe(
     map(expenses=>{
      return expenses.filter(expense=>{
        let matches = true;
        normalizedTerms.forEach(singleTerm=>{
          if(matches){
            matches= expense.name.toLowerCase().includes(singleTerm) || expense.description.toLowerCase().includes(singleTerm)
          }else{
            return matches;
          }          
        });
        return matches;
      }).reverse().sort(this.filterService.dateSorter)
     })
    )
  }

  ngAfterViewInit(){
    this.searchInputElement.nativeElement.focus();
  }

  public clear() {
    this.seachtext = "";
    this.searchTerm$.next("");
    this.searchInputElement.nativeElement.focus();
  }

}
