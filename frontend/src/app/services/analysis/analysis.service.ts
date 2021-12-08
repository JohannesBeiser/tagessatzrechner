import { Injectable } from '@angular/core';
import { ta } from 'date-fns/locale';


export type AnalysisTabTypes = "all_time" | "year" | "month" | "custom";

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private currentTab: AnalysisTabTypes;

  constructor() { 
    this.currentTab =  (localStorage.getItem("analysisTab") || "all_time") as AnalysisTabTypes;
  }

  public getCurrentTabOpened(): AnalysisTabTypes{
    return this.currentTab;
  }

  public setTab(tab:AnalysisTabTypes){
    localStorage.setItem("analysisTab", tab);
    this.currentTab = tab;
  }

}
