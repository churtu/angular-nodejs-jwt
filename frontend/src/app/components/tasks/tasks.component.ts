import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import * as moment from 'moment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private tasks = [];
  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(
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
