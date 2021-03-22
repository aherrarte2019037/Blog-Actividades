import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastActivities;

  constructor( private activityService: ActivityService ) {
    this.lastActivities = this.activityService.getLastActivities();
  }

  ngOnInit(): void { }

}
