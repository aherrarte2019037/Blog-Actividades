import { Injectable } from '@angular/core';
import * as Activities from './activities.json';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activities: Activity[] = Activities.items;

  constructor() { }

  getActivities(): Activity[] {
    return this.activities;
  }

  getLastActivities(): Activity[] {
    const lastActivities = this.activities.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return lastActivities;
  }

}
