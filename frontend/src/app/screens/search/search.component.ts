import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, share, tap } from 'rxjs/operators';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { FilterService } from 'src/app/services/filter/filter.service';
import { HttpClient } from '@angular/common/http';

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
  public majorTerm$: Subject<string>;
  public majorResult$: Observable<any>

  public results$: Observable<Expense[]>
  public collapseNotifier: Subject<void> = new Subject();
  public matchesFound: number;
  public matchesTotalAmount: number;

  public majorSystemEasterEggActive: boolean = false;


  constructor(
    public sliderService: SliderService,
    private expenseService: ExpenseService,
    private filterService: FilterService,
  ) { }

  ngOnInit(): void {
    this.searchTerm$ = new Subject<string>();
    this.majorTerm$ = new Subject<string>();
    this.majorResult$ = this.majorTerm$.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      filter(term => term.length > 0),
      map(term => {
        return this.translateWordToNumberRecursive(term)
      })
    )

    this.results$ = this.searchTerm$.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      filter(term => term.length > 0),
      switchMap((term) => this.getSearchResult(term))
    );
    this.results$.subscribe(expenses => {
      this.matchesFound = expenses.length;
      this.matchesTotalAmount = expenses.reduce((acc, cur) => {
        return acc + cur.amount
      }, 0)
    })



    //Collapse first in case of opened when new results come in
    this.results$.subscribe(() => {
      this.collapseNotifier.next();
    })
  }

  translateWordToNumberRecursive(word: string): string {
    let noDoubles = this.removedoubleLetters(word);
    let normalizedWord = noDoubles.replace(/[aeiou]/ig, '').toLowerCase();
    let res = this._translateWordToNumberRecursive("", normalizedWord)
    return res;
  }

  _translateWordToNumberRecursive(result: string, rest: string): string {
    if (rest.length == 0) {
      return result
    } else {
      switch (true) {
        case (rest.startsWith("sch")):
          return this._translateWordToNumberRecursive(result + "6", rest.substring(3))
        case (rest.startsWith("ch")): case (rest.startsWith("sh")):
          return this._translateWordToNumberRecursive(result + "6", rest.substring(2))
        case (rest.startsWith("ck")):
          return this._translateWordToNumberRecursive(result + "7", rest.substring(2))
        case (rest.startsWith("s")): case (rest.startsWith("z")):
          return this._translateWordToNumberRecursive(result + "0", rest.substring(1))
        case (rest.startsWith("th")):
          return this._translateWordToNumberRecursive(result + "1", rest.substring(2))
        case (rest.startsWith("t")): case (rest.startsWith("d")):
          return this._translateWordToNumberRecursive(result + "1", rest.substring(1))
        case (rest.startsWith("n")):
          return this._translateWordToNumberRecursive(result + "2", rest.substring(1))
        case (rest.startsWith("m")):
          return this._translateWordToNumberRecursive(result + "3", rest.substring(1))
        case (rest.startsWith("r")):
          return this._translateWordToNumberRecursive(result + "4", rest.substring(1))
        case (rest.startsWith("l")):
          return this._translateWordToNumberRecursive(result + "5", rest.substring(1))
        case (rest.startsWith("j")):
          return this._translateWordToNumberRecursive(result + "6", rest.substring(1))
        case (rest.startsWith("c")): case (rest.startsWith("k")): case (rest.startsWith("g")): case (rest.startsWith("q")):
          return this._translateWordToNumberRecursive(result + "7", rest.substring(1))
        case (rest.startsWith("f")): case (rest.startsWith("v")): case (rest.startsWith("w")):
          return this._translateWordToNumberRecursive(result + "8", rest.substring(1))
        case (rest.startsWith("ph")):
          return this._translateWordToNumberRecursive(result + "8", rest.substring(2))
        case (rest.startsWith("p")): case (rest.startsWith("b")):
          return this._translateWordToNumberRecursive(result + "9", rest.substring(1))
        default:
          return this._translateWordToNumberRecursive(result, rest.substring(1))
      }
    }
  }

  removedoubleLetters(word: string): string {
    let arr = Array.from(word);
    let result = ""
    arr.forEach(char => {
      if (result.length == 0 || char != result.charAt(result.length - 1)) {
        result += char;
      }
    })
    return result;
  }

  getSearchResult(terms: string): Observable<Expense[]> {
    let singleTerms = terms.toLowerCase().split(",");
    //remove leading and ending whitespace after splitting
    if (singleTerms[0] && singleTerms[0] == "major") {
      //Easter egg, for Major system screen ;)
      this.majorSystemEasterEggActive = true;
      return new Observable<Expense[]>()
    } else {
      this.majorSystemEasterEggActive = false;
      let normalizedTerms = singleTerms.map(el => {
        let res = el;
        if (el[0] === ' ') {
          res = res.substring(1);
        }
        if (el[el.length - 1] === ' ') {
          res = res.substring(0, res.length - 1);
        }
        return res;
      });
      return this.expenseService.getExpenses("expenses").pipe(
        map(expenses => {
          return expenses.filter(expense => {
            let matches = true;
            normalizedTerms.forEach(singleTerm => {
              if (matches) {
                matches = expense.name.toLowerCase().includes(singleTerm) || expense.description.toLowerCase().includes(singleTerm) || expense.group.toLowerCase().includes(singleTerm);
                let expenseDate = new Date(expense.date);
                let matchesDate = true;
                let dateSegments = singleTerm.split(".")
                for (let i = 0; i < dateSegments.length; i++) {
                  if (matchesDate) {
                    if (!parseInt(dateSegments[i]) && !(dateSegments[i] == "")) {
                      matchesDate = false;
                      break; // break loop not a date
                    }
                    // first day, month, year
                    if (i == 0) {
                      matchesDate = parseInt(dateSegments[i]) == expenseDate.getDate();
                    } else if (i == 1) {
                      //this is for the case "22."
                      if (dateSegments[i] !== "") {
                        matchesDate = parseInt(dateSegments[i]) == expenseDate.getMonth() + 1;
                      }
                    } else if (i == 2) {
                      //this is for the case "22.03." with ending dot leading to third segment
                      if (dateSegments[i] !== "") {
                        matchesDate = parseInt(dateSegments[i]) == expenseDate.getFullYear();
                      }
                    } else {
                      matchesDate = false;
                      break; // break loop not a date (can't have more than 3 segments 12.2.2020)
                    }
                  } else {
                    break;
                  }
                }
                matches = matches || matchesDate
              } else {
                return matches;
              }
            });
            return matches;
          }).reverse().sort((a, b) => this.filterService.dateSorter(a.date, b.date))
        })
      )

    }
  }



  ngAfterViewInit() {
    this.searchInputElement.nativeElement.focus();
  }

  public clear() {
    this.seachtext = "";
    this.searchTerm$.next("");
    this.searchInputElement.nativeElement.focus();
  }

}
