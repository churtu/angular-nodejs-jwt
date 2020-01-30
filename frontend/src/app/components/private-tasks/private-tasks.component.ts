import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import * as moment from 'moment'

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  private tasks =[];
  constructor(
    private taskService: TasksService
  ) { }

  ngOnInit() {
    this.taskService.getPrivateTasks().subscribe(
      res => {
        this.tasks = res;
      },
      err => console.log(err)
    )
  }

  format(timeStamp){
    return moment(timeStamp).startOf('minute').fromNow();
  }
}
