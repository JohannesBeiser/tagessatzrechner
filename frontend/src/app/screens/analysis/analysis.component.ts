import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less']
})
export class AnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // iterate over all expenses matching the tabs setting ( year, month etc)
    // then accumulate for each expense all the final data needed to shw all facts,
    // so only 1 iteration through all expenses is needed
    // do that actually in the 4 sub-components, thisn here is justa  dumb wrapper component
  }

}
