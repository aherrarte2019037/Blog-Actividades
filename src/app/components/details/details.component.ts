import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Activity } from 'src/app/models/activity.model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  activityId: number;
  activity: Activity

  constructor( private route: ActivatedRoute, private activityService: ActivityService ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.activity = this.activityService.getActivityById( Number(params.get('id')) );
    });
  }

  backPage() {
    window.history.back();
  }

}
