import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      console.log(data);
      this.tasks = data;
    });
  }

}
