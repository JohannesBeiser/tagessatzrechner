import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { isThisQuarter } from 'date-fns';
import { AnalysisService, AnalysisTabTypes } from 'src/app/services/analysis/analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less']
})
export class AnalysisComponent implements OnInit {

  constructor(
    private analysisService: AnalysisService
  ) { }

  public selectedTabIndex: number;

  ngOnInit(): void {

    this.selectedTabIndex = ["all_time", "year", "month", "custom"].indexOf(this.analysisService.getCurrentTabOpened()) || 0
    // iterate over all expenses matching the tabs setting ( year, month etc)
    // then accumulate for each expense all the final data needed to shw all facts,
    // so only 1 iteration through all expenses is needed
    // do that actually in the 4 sub-components, thisn here is justa  dumb wrapper component
  }

  tabSelected(event: MatTabChangeEvent){
    let tab = ["all_time", "year", "month", "custom"][event.index] as AnalysisTabTypes
    this.analysisService.setTab(tab);
  }

}
