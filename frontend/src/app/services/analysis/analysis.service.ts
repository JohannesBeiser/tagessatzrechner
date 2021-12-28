import { Injectable } from '@angular/core';
import { ta } from 'date-fns/locale';


export type AnalysisTabTypes = "all_time" | "year" | "month" | "custom";
export type RestrictionTypes = "none" | "no-special" | "no-special-no-invest";


@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private currentTab: AnalysisTabTypes;
  private initialYear: number;
  private initialRestriction: RestrictionTypes;

  constructor() { 
    this.currentTab =  (localStorage.getItem("analysisTab") || "all_time") as AnalysisTabTypes;
    this.initialRestriction =  (localStorage.getItem("analysisRestriction") || "none") as RestrictionTypes;
  }

  public getCurrentTabOpened(): AnalysisTabTypes{
    return this.currentTab;
  }

  public setTab(tab:AnalysisTabTypes){
    localStorage.setItem("analysisTab", tab);
    this.currentTab = tab;
  }

  public setYear(year: number){
    this.initialYear= year
  }

  public getInitialYear():number{
    return this.initialYear;
  }

  public getInitialRestriction(): RestrictionTypes{
    return this.initialRestriction;
  }
  public setInitialRestriction(restriction: RestrictionTypes){
    localStorage.setItem("analysisRestriction", restriction);
    this.initialRestriction = restriction;
  }

  

}
