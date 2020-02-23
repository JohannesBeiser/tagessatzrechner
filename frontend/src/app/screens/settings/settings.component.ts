import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  constructor(
    private groupsService: GroupsService
  ) { }

  public groups$: Observable<string[]>;
  public newGroupInputValue: string;

  ngOnInit(): void {
    this.groups$= this.groupsService.getGroups();
  }

  hardReloadApp(){
    let shallUpdate = confirm("Hard reloading resets the offline cached app. Data will still remain!");
    if (shallUpdate) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
          registration.unregister()
        }
      })
      this.reloadApp();
    }
  }

  reloadApp(){
    window.location.reload();
  }

  addGroup(){
    this.groupsService.addGroup(this.newGroupInputValue);
  }

  deleteGroup(groupKey: number, groupName: string){
    if(confirm(`Are you sure you want to delete ${groupName}?`)){
      this.groupsService.deleteGroup(groupKey)
    }
  }

}
